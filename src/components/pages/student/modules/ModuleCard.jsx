import Card from "../../../common/ui/Card";

function ModuleCard({ module }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-blue-700">{module.code}</p>

        {module.specialization && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium whitespace-nowrap">
            {module.specialization}
          </span>
        )}
      </div>

      <h3 className="mt-2 font-bold text-gray-900">{module.title}</h3>

      <p className="mt-3 text-sm text-gray-500">
        {module.credits != null ? `${module.credits} Credits` : "Continued"}
      </p>

      {module.lecturer && (
        <p className="mt-1 text-sm text-gray-600">{module.lecturer}</p>
      )}
    </Card>
  );
}

export default ModuleCard;
