import Badge from "../../../common/Badge";

function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-sky-500 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <Badge>Stay Informed</Badge>

        <h1 className="mt-6 text-5xl font-bold">
          Department News & Events
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
          Stay updated with the latest announcements, achievements, and
          events from the Department of Information and Communication
          Technology.
        </p>
      </div>
    </section>
  );
}

export default NewsHero;