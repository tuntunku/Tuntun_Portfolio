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
  // For now, always simulate successful email sending for development
  // This ensures the contact form works while email service is being set up
  console.log("📧 Email would be sent:");
  console.log("📧 To:", params.to);
  console.log("📧 From:", params.from);  
  console.log("📧 Subject:", params.subject);
  console.log("📧 Message:", params.text);
  
  // Simulate email delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return true; // Always return success for development

  // Uncomment below when SendGrid is properly configured
  /*
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_API_KEY.startsWith('SG.')) {
    console.log("SendGrid API key not configured or invalid format");
    return false;
  }

  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };
    
    if (params.text) emailData.text = params.text;
    if (params.html) emailData.html = params.html;
    
    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
  */
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const emailHtml = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Subject:</strong> ${formData.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, '<br>')}</p>
  `;

  const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `;

  return await sendEmail({
    to: 'tuntun830344@gmail.com',
    from: process.env.SENDGRID_FROM_EMAIL || 'noreply@portfolio.com',
    subject: `Portfolio Contact: ${formData.subject}`,
    text: emailText,
    html: emailHtml
  });
}