import PublicLayout from "../../layouts/PublicLayout"
import ContactHero from "../../components/pages/public/contact/ContactHero";
import ContactInfo from "../../components/pages/public/contact/ContactInfo";
import ContactForm from "../../components/pages/public/contact/ContactForm";
import LocationMap from "../../components/pages/public/contact/LocationMap";
import OfficeHours from "../../components/pages/public/contact/OfficeHours";
import FAQ from "../../components/pages/public/contact/FAQ";

function Contact() {
  return (
    <PublicLayout>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <OfficeHours />
      <FAQ />
    </PublicLayout>
  );
}

export default Contact;