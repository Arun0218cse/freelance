import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email to you (receiving the inquiry)
    const mailOptionsToYou = {
        from: process.env.EMAIL_USER,
        to: 'tech18arun@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h3>
          <p style="margin: 15px 0;"><strong style="color: #667eea;">Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong style="color: #667eea;">Email:</strong> ${email}</p>
          <p style="margin: 15px 0;"><strong style="color: #667eea;">Subject:</strong> ${subject}</p>
          
          <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Message</h3>
          <p style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #667eea; white-space: pre-wrap;">${message}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      </div>
    `
    };

    // Auto-reply to the client
    const mailOptionsToClient = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Arun',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0;">Thank You for Reaching Out!</h2>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
          
          <p style="color: #666; line-height: 1.6;">
            Thank you for contacting me! I have received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p style="margin: 0; color: #666;"><strong style="color: #667eea;">Your Message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #666; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            In the meantime, feel free to check out my portfolio for more information about my services.
          </p>
          
          <p style="color: #666; margin-top: 30px;">
            Best regards,<br>
            <strong style="color: #667eea;">Arun</strong><br>
            Full Stack Developer<br>
            📧 tech18arun@gmail.com<br>
            📱 +91 8608630388
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      </div>
    `
    };

    try {
        // Send email to you
        await transporter.sendMail(mailOptionsToYou);

        // Send auto-reply to client
        await transporter.sendMail(mailOptionsToClient);

        console.log('Emails sent successfully to both parties');

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully! We will get back to you soon.'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
}
