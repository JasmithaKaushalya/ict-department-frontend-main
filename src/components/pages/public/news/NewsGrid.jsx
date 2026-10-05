import SectionTitle from "../../../common/SectionTitle";
import NewsCard from "../../../common/cards/NewsCard";
import staticnewsData from "../../../../data/news/news";

function NewsGrid({ news = staticnewsData }) {

  const remainingNews = news
    
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (remainingNews.length === 0) {
    return (
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No regular announcements available at the moment.
          </h3>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Latest News"
          subtitle="Explore the latest announcements, activities, and achievements from the department."
        />

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {remainingNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsGrid;