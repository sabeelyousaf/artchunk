import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildAdminEnquiryEmail,
  buildUserEnquiryEmail,
} from "@/lib/email-templates";
import { SITE_NAME } from "@/lib/site";

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

function createTransport() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replaceAll(" ", "");

  if (!user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
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

  const transporter = createTransport();
  const toEmail = process.env.ENQUIRY_TO_EMAIL || process.env.SMTP_USER;
  const fromEmail =
    process.env.ENQUIRY_FROM_EMAIL ||
    `Artchunk <${process.env.SMTP_USER}>`;

  if (!transporter || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Enquiry delivery is not configured yet. Set SMTP_USER, SMTP_PASS and ENQUIRY_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toISOString();
  const emailData = {
    fullName,
    workEmail,
    company,
    phone,
    route,
    needType,
    startTime,
    budget,
    challenge,
    submittedAt,
  };

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: workEmail,
      subject: `New enquiry: ${route} — ${company}`,
      html: buildAdminEnquiryEmail(emailData),
    });

    await transporter.sendMail({
      from: fromEmail,
      to: workEmail,
      subject: `We received your ${SITE_NAME} enquiry`,
      html: buildUserEnquiryEmail(emailData),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send the enquiry. Please try again shortly." },
      { status: 502 },
    );
  }
}
