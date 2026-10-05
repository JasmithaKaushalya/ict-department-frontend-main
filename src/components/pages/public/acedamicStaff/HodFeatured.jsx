import { Mail, Phone } from "lucide-react";
import Card from "../../../common/ui/Card";

function HodFeatured({ hod }) {
  if (!hod) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="grid items-start gap-10 rounded-3xl border border-slate-100 bg-white p-10 shadow-lg sm:grid-cols-[220px_1fr]">
          <img
            src={hod.image}
            alt={hod.name}
            className="h-52 w-52 rounded-full object-cover border-4 border-blue-100 shadow-lg mx-auto sm:mx-0"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900">{hod.name}</h2>
            <p className="mt-1 text-blue-700 font-medium">{hod.designation}</p>

            
            <p className="mt-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
              Qualifications
            </p>
            <ul className="mt-3 space-y-1">
              {hod.qualifications?.map((q, index) => (
                <li key={index} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-green-600">✓</span>
                  {q}
                </li>
              ))}
            </ul>

            
            <p className="mt-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
              Research Interests
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hod.research?.map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>

            
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${hod.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                <Mail className="h-4 w-4" /> Email
              </a>

              {hod.phone && (
                <a
                  href={`tel:${hod.phone}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-700 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default HodFeatured;
