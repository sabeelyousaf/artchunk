import { LEGAL_ENTITY, SITE_NAME, SITE_URL } from "@/lib/site";

const LOGO_URL = `${SITE_URL}/images/logo.png`;

const light = {
  page: "#eef0e8",
  card: "#ffffff",
  panel: "#f4f5ef",
  footer: "#f2f3ec",
  ink: "#101514",
  body: "#3b4742",
  muted: "#6d7873",
  lime: "#8fb000",
  limeStrong: "#6f8c00",
  line: "rgba(16,21,20,0.12)",
  white: "#ffffff",
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
          <a class="email-cta" href="${escapeHtml(cta.href)}"
             style="display:inline-block;background:#101514;color:#cbfb13;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;padding:14px 22px;border-radius:999px;">
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
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root { color-scheme: light dark; }
    @media (prefers-color-scheme: dark) {
      .email-page { background:#101514 !important; }
      .email-card { background:#1b2121 !important; border-color:rgba(255,255,255,0.14) !important; }
      .email-header { background:#151a19 !important; border-color:rgba(255,255,255,0.14) !important; }
      .email-title { color:#ffffff !important; }
      .email-body, .email-copy { color:#f2f3ec !important; }
      .email-muted, .email-label, .email-disclaimer { color:#97a19d !important; }
      .email-eyebrow { color:#cbfb13 !important; }
      .email-panel { background:#242c2a !important; border-color:rgba(255,255,255,0.14) !important; }
      .email-value { color:#ffffff !important; }
      .email-challenge { background:#242c2a !important; border-color:rgba(255,255,255,0.14) !important; color:#f2f3ec !important; }
      .email-footer { background:#151a19 !important; border-color:rgba(255,255,255,0.14) !important; }
      .email-brand { color:#ffffff !important; }
      .email-link { color:#cbfb13 !important; }
      .email-cta { background:#cbfb13 !important; color:#000000 !important; }
      .email-row { border-color:rgba(255,255,255,0.14) !important; }
    }
  </style>
</head>
<body class="email-page" style="margin:0;padding:0;background:${light.page};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" class="email-page" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${light.page};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" class="email-card" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:${light.card};border:1px solid ${light.line};border-radius:24px;overflow:hidden;">
          <tr>
            <td class="email-header" style="padding:22px 32px;background:#111615;border-bottom:1px solid rgba(255,255,255,0.1);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <a href="${SITE_URL}" style="text-decoration:none;">
                      <img src="${LOGO_URL}" alt="${SITE_NAME}" width="150" height="auto" style="display:block;width:150px;max-width:100%;height:auto;border:0;" />
                    </a>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#cbfb13;"></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <p class="email-eyebrow" style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1.4px;text-transform:uppercase;font-weight:700;color:${light.limeStrong};">
                ${escapeHtml(eyebrow)}
              </p>
              <h1 class="email-title" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:1.15;letter-spacing:-0.6px;font-weight:700;color:${light.ink};">
                ${escapeHtml(title)}
              </h1>
            </td>
          </tr>
          <tr>
            <td class="email-body" style="padding:8px 32px 32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:${light.body};">
              ${bodyHtml}
              ${ctaHtml}
            </td>
          </tr>
          <tr>
            <td class="email-footer" style="padding:22px 32px;background:${light.footer};border-top:1px solid ${light.line};">
              <p class="email-brand" style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${light.ink};font-weight:700;">
                ${SITE_NAME}
              </p>
              <p class="email-muted" style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${light.muted};">
                ${LEGAL_ENTITY}<br />
                Managed talent &amp; digital solutions
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;">
                <a class="email-link" href="${SITE_URL}" style="color:${light.limeStrong};text-decoration:none;">artchunk.com</a>
                &nbsp;&middot;&nbsp;
                <a class="email-muted" href="${SITE_URL}/privacy" style="color:${light.muted};text-decoration:none;">Privacy</a>
                &nbsp;&middot;&nbsp;
                <a class="email-muted" href="${SITE_URL}/terms" style="color:${light.muted};text-decoration:none;">Terms</a>
              </p>
            </td>
          </tr>
        </table>
        <p class="email-disclaimer" style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;color:${light.muted};max-width:600px;">
          You received this email because an enquiry was submitted on artchunk.com.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string, last = false) {
  const border = last ? "" : `border-bottom:1px solid ${light.line};`;
  return `
    <tr>
      <td class="email-label email-row" style="padding:12px 0;${border}vertical-align:top;width:38%;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.4px;text-transform:uppercase;color:${light.muted};">
        ${escapeHtml(label)}
      </td>
      <td class="email-value email-row" style="padding:12px 0;${border}vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${light.ink};">
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
  const emailHtml = `<a class="email-link" href="mailto:${escapeHtml(data.workEmail)}" style="color:${light.limeStrong};text-decoration:none;">${escapeHtml(data.workEmail)}</a>`;

  const bodyHtml = `
    <p class="email-copy" style="margin:0 0 22px;color:${light.body};">
      A new enquiry landed through the Artchunk site. Reply directly to this email to reach the sender.
    </p>
    <table role="presentation" class="email-panel" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${light.panel};border:1px solid ${light.line};border-radius:16px;padding:4px 18px;">
      ${detailRow("Submitted", escapeHtml(formatSubmittedAt(data.submittedAt)))}
      ${detailRow("Name", escapeHtml(data.fullName))}
      ${detailRow("Email", emailHtml)}
      ${detailRow("Company", escapeHtml(data.company))}
      ${detailRow("Phone", phoneHtml)}
      ${detailRow("Route", escapeHtml(data.route))}
      ${detailRow("Need", escapeHtml(data.needType))}
      ${detailRow("Preferred start", escapeHtml(data.startTime))}
      ${detailRow("Budget", escapeHtml(data.budget), true)}
    </table>
    <p class="email-label" style="margin:24px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.4px;text-transform:uppercase;color:${light.muted};">
      What needs to move
    </p>
    <div class="email-challenge" style="margin:0;padding:16px 18px;background:${light.panel};border:1px solid ${light.line};border-left:3px solid #cbfb13;border-radius:12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${light.body};">
      ${challengeHtml}
    </div>
  `;

  return emailShell({
    preheader: `New ${data.route} enquiry from ${data.company}`,
    eyebrow: "New enquiry",
    title: "Tell us what needs to move.",
    bodyHtml,
  });
}

export function buildUserEnquiryEmail(data: EnquiryEmailData) {
  const bodyHtml = `
    <p class="email-copy" style="margin:0 0 16px;color:${light.body};">
      Hi ${escapeHtml(data.fullName)},
    </p>
    <p class="email-copy" style="margin:0 0 22px;color:${light.body};">
      Thanks for contacting ${SITE_NAME}. We’ve received your enquiry and will reply shortly with a clear next step.
    </p>
    <table role="presentation" class="email-panel" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${light.panel};border:1px solid ${light.line};border-radius:16px;padding:4px 18px;">
      ${detailRow("Route", escapeHtml(data.route))}
      ${detailRow("Company", escapeHtml(data.company))}
      ${detailRow("Need", escapeHtml(data.needType))}
      ${detailRow("Preferred start", escapeHtml(data.startTime), true)}
    </table>
    <p class="email-copy" style="margin:22px 0 0;color:${light.body};">
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
