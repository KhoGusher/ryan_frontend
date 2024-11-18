import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service provider (e.g., Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender address
        to: 'director@example.com', // Replace with the director's email address
        subject: subject,
        text: message,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}
