import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LEGAL_ENTITY, SITE_NAME, SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

type EnquiryBody = {
  fullName?: string;
  workEmail?: string;
  company?: string;
  phone?: string;
  route?: string;
  needType?: string;
  startTime?: string;
  budget?: string;
  challenge?: string;
  consent?: boolean | string;
  website?: string; // honeypot
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredString(value: unknown, max = 500) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans leave them empty.
  if (body.website && String(body.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const fullName = requiredString(body.fullName, 120);
  const workEmail = requiredString(body.workEmail, 200);
  const company = requiredString(body.company, 160);
  const route = requiredString(body.route, 80);
  const needType = requiredString(body.needType, 160);
  const startTime = requiredString(body.startTime, 80);
  const budget = requiredString(body.budget, 80);
  const challenge = requiredString(body.challenge, 4000);
  const phone = requiredString(body.phone ?? "", 60) ?? "";
  const consent =
    body.consent === true ||
    body.consent === "true" ||
    body.consent === "on" ||
    body.consent === "1";

  if (
    !fullName ||
    !workEmail ||
    !emailPattern.test(workEmail) ||
    !company ||
    !route ||
    !needType ||
    !startTime ||
    !budget ||
    !challenge ||
    !consent
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields with valid details." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail =
    process.env.ENQUIRY_FROM_EMAIL || "Artchunk <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Enquiry delivery is not configured yet. Set RESEND_API_KEY and ENQUIRY_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toISOString();

  const adminHtml = `
    <h2>New Artchunk enquiry</h2>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(workEmail)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Route:</strong> ${escapeHtml(route)}</p>
    <p><strong>Need:</strong> ${escapeHtml(needType)}</p>
    <p><strong>Preferred start:</strong> ${escapeHtml(startTime)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Challenge:</strong></p>
    <p>${escapeHtml(challenge).replaceAll("\n", "<br>")}</p>
  `;

  const userHtml = `
    <p>Hi ${escapeHtml(fullName)},</p>
    <p>Thanks for contacting ${SITE_NAME}. We have received your enquiry and will reply shortly.</p>
    <p><strong>Route:</strong> ${escapeHtml(route)}<br>
    <strong>Company:</strong> ${escapeHtml(company)}</p>
    <p>If anything changes before we reply, just email us back on this thread.</p>
    <p>— ${SITE_NAME}<br>
    <a href="${SITE_URL}">${SITE_URL.replace("https://", "")}</a><br>
    ${LEGAL_ENTITY}</p>
  `;

  try {
    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: workEmail,
      subject: `New enquiry: ${route} — ${company}`,
      html: adminHtml,
    });

    if (adminResult.error) {
      return NextResponse.json(
        { error: "Could not send the enquiry. Please try again shortly." },
        { status: 502 },
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: [workEmail],
      subject: `We received your ${SITE_NAME} enquiry`,
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send the enquiry. Please try again shortly." },
      { status: 502 },
    );
  }
}
