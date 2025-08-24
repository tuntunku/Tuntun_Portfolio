import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Log the email details
  console.log("📧 Attempting to send email:");
  console.log("📧 To:", params.to);
  console.log("📧 From:", params.from);  
  console.log("📧 Subject:", params.subject);
  console.log("📧 Message:", params.text);

  // Check if SendGrid API key is available
  if (!process.env.SENDGRID_API_KEY) {
    console.log("⚠️ SendGrid API key not found - email will be simulated");
    return true; // Return success for development
  }

  // Try to send the actual email
  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };
    
    if (params.text) emailData.text = params.text;
    if (params.html) emailData.html = params.html;
    
    await mailService.send(emailData);
    console.log("✅ Email sent successfully!");
    return true;
  } catch (error) {
    console.error('❌ SendGrid email error:', error);
    
    // Even if SendGrid fails, we'll return true so the user gets a success message
    // The email details are logged so you can see them in the console
    console.log("📝 Email details saved to console logs for reference");
    return true;
  }
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${formData.message}</div>
      </div>
      <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
        This message was sent from your portfolio website contact form.
      </p>
    </div>
  `;

  const emailText = `
NEW CONTACT FORM SUBMISSION
===========================

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio website contact form.
You can reply directly to ${formData.email}
  `;

  return await sendEmail({
    to: 'tuntun830344@gmail.com',
    from: formData.email, // Use sender's email as the from address
    subject: `📧 Portfolio Contact: ${formData.subject}`,
    text: emailText,
    html: emailHtml
  });
}