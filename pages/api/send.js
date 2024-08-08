import { render } from "@react-email/render";
import { ContactEmail } from "../../emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@imperfectors.com>",
      to: ["imperfectors@gmail.com"],
      subject: "Thank you for reaching out!",
      react: render(ContactEmail({ name, email, phone, message })),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
