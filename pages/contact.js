import Head from "next/head";
import ContactForm from "../components/contact/contact-form";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="A contact me page!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
