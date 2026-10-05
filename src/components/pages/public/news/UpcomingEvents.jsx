import { Calendar, Clock, MapPin } from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import eventsData from "../../../../data/news/events";

function UpcomingEvents() {
  const today = new Date();

  // 1. Filter out past events, sort by upcoming date (closest first), and limit to 4 items
  const upcomingEvents = [...eventsData]
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  // If there are no future events, cleanly hide the section from the page
  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Upcoming Events" subtitle="Mark Your Calendar" />

        <div className="mt-14 relative border-l-2 border-slate-200 pl-8 space-y-8">
          {upcomingEvents.map((event) => {
            const eventDate = new Date(event.date);

            return (
              <div key={event.id} className="relative group">
                <span className="absolute -left-[43px] top-0 h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                  <Calendar className="h-4 w-4 text-white" />
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-blue-700 font-bold text-sm">
                    {eventDate.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-100">
                    {event.category}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {event.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
                  <p className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-gray-400" />
                    {event.time}
                  </p>

                  <p className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {event.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
