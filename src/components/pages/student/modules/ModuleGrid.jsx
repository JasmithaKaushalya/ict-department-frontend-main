import ModuleCard from "./ModuleCard";

function ModuleGrid({ modules }) {
  if (modules.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No modules match your search.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard key={module.code} module={module} />
      ))}
    </div>
  );
}

export default ModuleGrid;
