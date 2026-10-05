import Card from "../../../common/ui/Card";

function SummaryCard({ item }) {
  const Icon = item.icon;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {item.value}
          </h2>
        </div>

        <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center">
          <Icon className="h-7 w-7 text-[#0F4C81]" />
        </div>
      </div>
    </Card>
  );
}

export default SummaryCard;