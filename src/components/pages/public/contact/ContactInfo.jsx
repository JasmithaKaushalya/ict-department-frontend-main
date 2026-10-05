import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Card from "../../../common/ui/Card";
import contact from "../../../../data/contact/contact";

const items = [
  { icon: MapPin, label: "Address", value: contact.address },
  { icon: Phone, label: "Phone", value: contact.phone },
  { icon: Mail, label: "Email", value: contact.email },
  {
    icon: Clock,
    label: "Office Hours",
    value: `${contact.officeHours.weekdays}\n${contact.officeHours.time}`,
  },
];

function ContactInfo() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card key={index} className="text-center">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-sky-100">
                <Icon className="h-7 w-7 text-blue-700" />
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">{item.label}</h3>

              <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">
                {item.value}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default ContactInfo;
