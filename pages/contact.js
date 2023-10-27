import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";
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
