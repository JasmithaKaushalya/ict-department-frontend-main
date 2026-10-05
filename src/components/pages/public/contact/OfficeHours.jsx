import { Clock } from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import contact from "../../../../data/contact/contact";

const schedule = [
  { day: contact.officeHours.weekdays, hours: contact.officeHours.time },
  { day: "Saturday", hours: contact.officeHours.weekends },
  { day: "Sunday", hours: contact.officeHours.weekends },
];

function OfficeHours() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle title="Office Hours" subtitle="When We're Available" />

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {schedule.map((item, index) => (
            <Card key={index} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                <Clock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{item.day}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.hours}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficeHours;
