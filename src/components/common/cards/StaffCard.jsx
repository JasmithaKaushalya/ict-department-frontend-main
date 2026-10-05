import { Dot, Mail } from "lucide-react";
import Card from "../ui/Card";

function StaffCard({ member }) {
  return (
    <Card className="text-center flex flex-col items-center h-full p-6">
      <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-50 border-4 border-blue-100 flex items-center justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="mt-4 font-bold text-gray-900 text-lg">{member.name}</h3>

      <p className="text-blue-700 text-sm font-medium">{member.designation}</p>

      
      {member.research.length > 0 && (
        <div className="mt-6 max-w-[240px] flex flex-col items-start gap-2 w-full">
          {member.research.map((topic, index) => (
            <div
              key={index}
              className="flex items-center text-left  text-sm font-medium text-gray-700"
            >
              <Dot className="h-7 w-7 text-blue-500 shrink-0"/>
              <span>{topic}</span>
            </div>
          ))}
        </div>
      )}
      <div className="mt-auto pt-6 w-full flex justify-center">
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold  hover:bg-blue-800 transition-colors"
        >
          <Mail className="h-4 w-4" /> Email
        </a>
      </div>
    </Card>
  );
}

export default StaffCard;
