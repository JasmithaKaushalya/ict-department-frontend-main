import Badge from "../../../common/Badge";
import { PhoneCall } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500  py-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <Badge>Get In Touch</Badge>

        <div className="mx-auto mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <PhoneCall className="h-8 w-8 text-white" />
        </div>

        <h1 className="mt-6 text-5xl font-bold">Contact Us</h1>

        <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
          We are here to help. Get in touch with the Department of Information
          and Communication Technology.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
