import Card from "../ui/Card";

function TemporaryStaffCard({ member }) {
  return (
    <Card className="text-center flex flex-col items-center h-full">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-50 border-4 border-blue-100 flex items-center justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="mt-4 font-bold text-gray-900 text-sm">{member.name}</h3>

      <p className="text-blue-700 text-xs font-medium">{member.designation}</p>

      <p className="mt-auto pt-3 text-xs text-gray-500 leading-5">
        {member.qualifications[0]}
      </p>
    </Card>
  );
}

export default TemporaryStaffCard;
