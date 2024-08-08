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


export const SubmissionData = ({ name, email, phone, message }) => {
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
              <Section className="flex gap-5 justify-center items-center pl-45">
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
              <strong className="capitalize">
                User's submitted details:
              </strong>
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


export default SubmissionData;