import Card from "../../../common/ui/Card";
import Button from "../../../common/ui/Button";
import news from "../../../../data/news/news";

function FeaturedNews() {
  const featured = news.find((item) => item.featured);
  if (!featured) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="grid md:grid-cols-2 gap-0 overflow-hidden p-0">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-80 md:h-full object-cover"
          />

          <div className="p-8">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
              {featured.category}
            </span>

            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              {featured.title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {new Date(featured.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              {featured.description}
            </p>

            <Button className="mt-6">Read More</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default FeaturedNews;
