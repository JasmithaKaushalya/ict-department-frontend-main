import PublicLayout from "../../layouts/PublicLayout"
import NewsHero from "../../components/pages/public/news/NewsHero";
import FeaturedNews from "../../components/pages/public/news/FeaturedNews";
import NewsGrid from "../../components/pages/public/news/NewsGrid";
import UpcomingEvents from "../../components/pages/public/news/UpcomingEvents";
import Achievements from "../../components/pages/public/news/Achievements";
import NewsletterCTA from "../../components/pages/public/news/NewsletterCTA";

function NewsEvents() {
  return (
    <PublicLayout>
      <NewsHero />
      <FeaturedNews />
      <NewsGrid />
      <UpcomingEvents />
      <Achievements />
      <NewsletterCTA />
    </PublicLayout>
  );
}

export default NewsEvents;