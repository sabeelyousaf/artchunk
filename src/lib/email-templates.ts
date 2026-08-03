import { LEGAL_ENTITY, SITE_NAME, SITE_URL } from "@/lib/site";

const LOGO_URL = `${SITE_URL}/images/logo.png`;

const colors = {
  ink: "#101514",
  charcoal: "#1b2121",
  graphite: "#29302e",
  bone: "#f2f3ec",
  muted: "#97a19d",
  lime: "#cbfb13",
  white: "#ffffff",
  line: "rgba(255,255,255,0.14)",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatSubmittedAt(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "UTC",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function emailShell(options: {
  preheader: string;
  eyebrow: string;
  title: string;
  bodyHtml: string;
  cta?: { href: string; label: string };
}) {
  const { preheader, eyebrow, title, bodyHtml, cta } = options;

  const ctaHtml = cta
    ? `
      <tr>
        <td style="padding:28px 0 8px;">
          <a href="${escapeHtml(cta.href)}"
             style="display:inline-block;background:${colors.lime};color:#000000;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;padding:14px 22px;border-radius:999px;">
            ${escapeHtml(cta.label)}
          </a>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${colors.ink};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${colors.ink};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:${colors.charcoal};border:1px solid ${colors.line};border-radius:24px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 20px;border-bottom:1px solid ${colors.line};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <a href="${SITE_URL}" style="text-decoration:none;">
                      <img src="${LOGO_URL}" alt="${SITE_NAME}" width="160" height="auto" style="display:block;width:160px;max-width:100%;height:auto;border:0;" />
                    </a>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${colors.lime};"></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1.4px;text-transform:uppercase;font-weight:700;color:${colors.lime};">
                ${escapeHtml(eyebrow)}
              </p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:1.15;letter-spacing:-0.6px;font-weight:700;color:${colors.white};">
                ${escapeHtml(title)}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:${colors.bone};">
              ${bodyHtml}
              ${ctaHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;background:${colors.graphite};border-top:1px solid ${colors.line};">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${colors.white};font-weight:700;">
                ${SITE_NAME}
              </p>
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${colors.muted};">
                ${LEGAL_ENTITY}<br />
                Managed talent &amp; digital solutions
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;">
                <a href="${SITE_URL}" style="color:${colors.lime};text-decoration:none;">artchunk.com</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}/privacy" style="color:${colors.muted};text-decoration:none;">Privacy</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}/terms" style="color:${colors.muted};text-decoration:none;">Terms</a>
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;color:${colors.muted};max-width:600px;">
          You received this email because an enquiry was submitted on artchunk.com.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string, last = false) {
  return `
    <tr>
      <td style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${colors.line};`}vertical-align:top;width:38%;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.4px;text-transform:uppercase;color:${colors.muted};">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${colors.line};`}vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${colors.white};">
        ${value}
      </td>
    </tr>`;
}

export type EnquiryEmailData = {
  fullName: string;
  workEmail: string;
  company: string;
  phone: string;
  route: string;
  needType: string;
  startTime: string;
  budget: string;
  challenge: string;
  submittedAt: string;
};

export function buildAdminEnquiryEmail(data: EnquiryEmailData) {
  const challengeHtml = escapeHtml(data.challenge).replaceAll("\n", "<br>");
  const phoneHtml = escapeHtml(data.phone || "—");
  const emailHtml = `<a href="mailto:${escapeHtml(data.workEmail)}" style="color:${colors.lime};text-decoration:none;">${escapeHtml(data.workEmail)}</a>`;

  const bodyHtml = `
    <p style="margin:0 0 22px;color:${colors.bone};">
      A new enquiry landed through the Artchunk site. Reply directly to this email to reach the sender.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${colors.graphite};border:1px solid ${colors.line};border-radius:16px;padding:4px 18px;">
      ${detailRow("Submitted", escapeHtml(formatSubmittedAt(data.submittedAt))}
      ${detailRow("Name", escapeHtml(data.fullName))}
      ${detailRow("Email", emailHtml)}
      ${detailRow("Company", escapeHtml(data.company))}
      ${detailRow("Phone", phoneHtml)}
      ${detailRow("Route", escapeHtml(data.route))}
      ${detailRow("Need", escapeHtml(data.needType))}
      ${detailRow("Preferred start", escapeHtml(data.startTime))}
      ${detailRow("Budget", escapeHtml(data.budget), true)}
    </table>
    <p style="margin:24px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.4px;text-transform:uppercase;color:${colors.muted};">
      What needs to move
    </p>
    <div style="margin:0;padding:16px 18px;background:${colors.graphite};border:1px solid ${colors.line};border-left:3px solid ${colors.lime};border-radius:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${colors.bone};">
      ${challengeHtml}
    </div>
  `;

  return emailShell({
    preheader: `New ${data.route} enquiry from ${data.company}`,
    eyebrow: "New enquiry",
    title: "Tell us what needs to move.",
    bodyHtml,
    cta: { href: `mailto:${data.workEmail}`, label: "Reply to sender" },
  });
}

export function buildUserEnquiryEmail(data: EnquiryEmailData) {
  const bodyHtml = `
    <p style="margin:0 0 16px;">
      Hi ${escapeHtml(data.fullName)},
    </p>
    <p style="margin:0 0 22px;">
      Thanks for contacting ${SITE_NAME}. We’ve received your enquiry and will reply shortly with a clear next step.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${colors.graphite};border:1px solid ${colors.line};border-radius:16px;padding:4px 18px;">
      ${detailRow("Route", escapeHtml(data.route))}
      ${detailRow("Company", escapeHtml(data.company))}
      ${detailRow("Need", escapeHtml(data.needType))}
      ${detailRow("Preferred start", escapeHtml(data.startTime), true)}
    </table>
    <p style="margin:22px 0 0;">
      If anything changes before we reply, just respond to this email.
    </p>
  `;

  return emailShell({
    preheader: `We received your ${SITE_NAME} enquiry — we’ll reply shortly.`,
    eyebrow: "Enquiry received",
    title: "We’ve got it.",
    bodyHtml,
    cta: { href: SITE_URL, label: "Visit Artchunk" },
  });
}
