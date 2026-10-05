import Card from "../ui/Card";
import Button from "../ui/Button";

function NewsCard({ item }) {
  return (
    <Card className="p-0 overflow-hidden flex flex-col h-full">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6 flex flex-col flex-1">
        <span className="w-fit px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
          {item.category}
        </span>

        <h3 className="mt-3 text-lg font-bold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-3 text-sm text-gray-600 leading-6 flex-1">
          {item.description}
        </p>

        <Button className="mt-5 w-full">Read More</Button>
      </div>
    </Card>
  );
}

export default NewsCard;