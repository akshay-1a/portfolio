import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Hr,
} from "@react-email/components";
import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

const PropDefaults = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Deploy your first project.</strong>{" "}
          <Link>Connect to Git, choose a template</Link>, or manually deploy a
          project you've been working on locally.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Check your deploy logs.</strong> Find out what's included in
          your build and watch for errors or failed deploys.{" "}
          <Link>Learn how to read your deploy logs</Link>.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Choose an integration.</strong> Quickly discover, connect, and
          configure the right tools for your project with 150+ integrations to
          choose from. <Link>Explore the Integrations Hub</Link>.
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Set up a custom domain.</strong> You can register a new domain
          and buy it through Netlify or assign a domain you already own to your
          site. <Link>Add a custom domain</Link>.
        </li>
      ),
    },
  ],
  links: [
    { title: "About Me", link: "https://akshay.imperfectors.com/about" },
    { title: "My Serivces", link: "https://akshay.imperfectors.com/services" },
    { title: "My Work", link: "https://akshay.imperfectors.com/work" },
  ],
};

const buttons = {
  display: "flex",
  gap: "5px",
  justifyContent: "center",
  alignItems: "center",
};

const bord = {
  border: "2px solid #0f172a",
  borderRadius: "8px",
};


export const ContactEmail = ({
  name,
  email,
  phone,
  message,
  links = PropDefaults.links,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Hello There!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container style={bord}>
            <Container className="bg-slate-900 pt-4 pb-0 mb-0">
              <Section className="flex gap-5 justify-center items-center">
                <Column className="text-white text-4xl font-extrabold">
                  ImPerfectors.com
                </Column>
                <Column>
                  <Img
                    src="https://akshay.imperfectors.com/_next/image?url=%2Favatar.png&w=750&q=75"
                    width="214"
                    height="184"
                    alt="ImPerfectors"
                    className=""
                  />
                </Column>
              </Section>
            </Container>
            <Container className="bg-white p-45 pb-20">
              <Heading className="text-center my-0 leading-8">
                Thank You for Reaching Out!
              </Heading>
              <Section className="border-2 border-slate-900">
                <Row>
                  <Text className="text-base">
                    Hello {name}, Thank you for connecting with me through my
                    portfolio website. I genuinely appreciate you taking the
                    time to reach out. Your message is important to me, and I
                    will review it carefully and respond as soon as possible. In
                    the meantime, feel free to explore my work and see how I
                    bring ideas to life. You can also connect with me on{" "}
                    <Link href="https://github.com/akshay-1a">GitHub</Link> or{" "}
                    <Link href="https://www.linkedin.com/in/-akshay-/">
                      LinkedIn
                    </Link>{" "}
                    to stay updated on my latest projects.
                  </Text>
                  <Hr />
                  <Text className="text-base capitalize">
                    <strong>Here's your submitted details:</strong>
                  </Text>
                </Row>
              </Section>
              {/* <ul>{steps?.map(({ Description }) => Description)}</ul> */}
              <ul className="capitalize" type="square">
                <li className="mb-20">
                  <strong>Name: </strong> <Link>{name}</Link>
                </li>
                <li className="mb-20">
                  <strong>Email: </strong> <Link>{email}</Link>
                </li>
                <li className="mb-20">
                  <strong>Phone: </strong> <Link>{phone}</Link>
                </li>
                <li className="mb-20">
                  <strong>Message: </strong> <Link>{message}</Link>
                </li>
              </ul>
              <Section className="text-center my-45" style={buttons}>
                <Button
                  href="https://imperfectors.com"
                  className="bg-slate-700 text-white rounded-lg py-3 px-[18px] mr-5 capitalize"
                >
                  Visit my Portfolio!
                </Button>
                <Button
                  href="https://imperfectors.com"
                  className="bg-slate-800 text-white rounded-lg py-3 px-[18px]"
                >
                  Visit Imperfectors.com
                </Button>
              </Section>
              <Section className="">
                <Row>
                  {links?.map((link) => (
                    <Column key={link}>
                      <Link
                        href={link.link}
                        className="text-black underline font-bold"
                      >
                        {link.title}
                      </Link>{" "}
                      <span className="text-green-500 hover:rotate-45">→</span>
                    </Column>
                  ))}
                </Row>
              </Section>
            </Container>

            <Container className="pt-20 bg-slate-300">
              <Section>
                <Img
                  src="https://react-email-demo-9fn3mchcm-resend.vercel.app/static/yelp-footer.png"
                  width="100%"
                  alt="footer"
                  className=""
                />
                <Link href="https://maps.app.goo.gl/U4uJfG5xMuRBVT7J9">
                  <Text className="text-center text-slate-900 text-xl">
                    ImPerfectors, New Delhi, Delhi, India 110077
                  </Text>
                </Link>
                <Row className="mb-45">
                  <Column className="text-right px-20">
                    <Link href="tel:+919810368359" className="text-slate-900">
                      +91 981 036 8359
                    </Link>
                  </Column>
                  <Column className="text-left">
                    <Link
                      href="mailto:imperfectors@gmail.com"
                      className="text-slate-900"
                    >
                      Imperfectors@gmail.com
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;

