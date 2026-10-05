import { CheckCircle } from "lucide-react";
import Button from "../../../common/ui/Button";
import aboutImage from "../../../../assets/images/about.jpg";

const features = [
  "Modern Curriculum",
  "Experienced Lecturers",
  "Industry Partnerships",
  "Research Opportunities",
];

function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <img
          src={aboutImage}
          alt="ICT Department"
          className="w-full h-96 rounded-3xl shadow-lg object-cover"
        />

        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Who We Are
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The Department of Information and Communication Technology at
            Uva Wellassa University is dedicated to shaping skilled,
            industry-ready graduates through a curriculum built on
            innovation, hands-on learning, and strong ties to the tech
            industry.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button to="/courses" className="mt-8">
            Explore Courses
          </Button>
        </div>

      </div>
    </section>
  );
}

export default WhoWeAre;