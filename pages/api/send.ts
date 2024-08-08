
import type { NextApiRequest, NextApiResponse } from "next";
import { ContactEmail } from "../../emails";
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
    const { data, error } = await resend.emails.send({
      from: "contact <contact@imperfectors.com>",
      to: ["imperfectors@gmail.com", email],
      subject: "Thank You For Reaching Out!",
      react: ContactEmail({ name, email, phone, message }),
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};