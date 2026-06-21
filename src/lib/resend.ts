import { Resend } from 'resend';

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not set');
  return new Resend(key);
}

export async function sendConfirmationEmail(email: string): Promise<void> {
  const resend = getResend();
  await resend.emails.send({
    from: 'FORM. <hello@getform.co.uk>',
    to: email,
    subject: 'You are on the list.',
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="background:#0D0D0D;color:#FFFFFF;font-family:monospace;padding:40px;max-width:480px;margin:0 auto;">
  <p style="font-size:24px;font-weight:900;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 4px 0;">FORM.</p>
  <p style="font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#8A8A8A;margin:0 0 32px 0;">FACE PERFORMANCE SYSTEM</p>
  <hr style="border:none;border-top:1px solid #2A2A2A;margin:0 0 32px 0;" />
  <p style="font-size:18px;font-weight:700;margin:0 0 16px 0;">You&rsquo;re in.</p>
  <p style="color:#8A8A8A;line-height:1.6;margin:0 0 16px 0;">
    We&rsquo;ll email you 48 hours before launch with founding-member pricing.<br />
    That&rsquo;s £34.99/month, locked for life — never this price again.
  </p>
  <p style="color:#8A8A8A;line-height:1.6;margin:0 0 32px 0;">
    In the meantime — follow the build:<br />
    <span style="color:#4A7FA5;">@getform</span> on TikTok and Instagram
  </p>
  <p style="color:#8A8A8A;font-size:12px;margin:0 0 32px 0;">The system ships when we&rsquo;re ready. Not before.</p>
  <p style="font-weight:700;margin:0 0 32px 0;">— FORM.</p>
  <hr style="border:none;border-top:1px solid #2A2A2A;margin:0 0 24px 0;" />
  <div style="display:flex;height:3px;margin:0 0 24px 0;">
    <div style="flex:1;background:#3A6B8A;"></div>
    <div style="flex:1;background:#2E8B6E;"></div>
    <div style="flex:1;background:#4A7FA5;"></div>
    <div style="flex:1;background:#8B6A3E;"></div>
  </div>
  <p style="color:#3A3A3A;font-size:10px;margin:0;">getform.co.uk</p>
</body>
</html>`,
  });
}
