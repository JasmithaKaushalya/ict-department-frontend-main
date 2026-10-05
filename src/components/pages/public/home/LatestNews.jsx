import SectionTitle from "../../../common/SectionTitle";
import NewsCard from "../../../common/cards/NewsCard";
import news from "../../../../data/news/news";

function LatestNews() {
  const latestNews = [...news]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="News" subtitle="Latest Department Updates" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {latestNews.map((newsItem) => (
            <NewsCard key={newsItem.id} item={newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
