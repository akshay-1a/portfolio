
import type { NextApiRequest, NextApiResponse } from "next";
import { ContactEmail } from "../../emails/ContactEmail";
import { SubmissionData } from "../../emails/Submission";
// import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { name, email, phone, message } = req.body;
  try {
    const userResponse = await resend.emails.send({
      from: "contact <contact@imperfectors.com>",
      to: [email],
      subject: "Thank You For Reaching Out!",
      react: ContactEmail({ name, email, phone, message }),
    });

    // Send email to your own address
    const ownerResponse = await resend.emails.send({
      from: "contact <contact@imperfectors.com>",
      to: ["imperfectors@gmail.com"],
      subject: "New Contact Form Submission",
      react: SubmissionData({ name, email, phone, message }),
    });

    // Check if there were errors
    if (userResponse.error || ownerResponse.error) {
      res
        .status(400)
        .json({ error: userResponse.error || ownerResponse.error });
    } else {
      res.status(200).json({ data: "Emails sent successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};