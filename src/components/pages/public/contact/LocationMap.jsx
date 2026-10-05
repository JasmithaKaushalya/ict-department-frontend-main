import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";

function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Department Location"
          subtitle="Find Us on Campus"
        />

        <div className="relative mt-14 w-full h-96 rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
          <img
            src="../src/assets/images/contact/campus-map.jpg"
            alt="Department Location"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />



          <a
            href="https://maps.app.goo.gl/Mdw7XtMbhzLbEzEf9"
            className="absolute bottom-6 right-6 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-800 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
