import { CheckCircle } from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Button from "../../../common/ui/Button";
import aboutImage from "../../../../assets/images/about.jpg"

const features = [
  "Modern Laboratories",
  "Experienced Academic Staff",
  "Industry Partnerships",
  "Research Opportunities",
];

function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle
            title="About Us"
            subtitle="Building Future ICT Professionals"
            center={false}
          />

          <p className="mt-6 text-gray-600 leading-8">
            The Department of ICT is committed to producing highly skilled
            graduates through innovative teaching, research, and industry
            collaboration. Our programs prepare students to solve real-world
            technological challenges.
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

          <Button to="/about" className="mt-8">
            Learn More
          </Button>
        </div>

       <div className="relative">
          <img
            src={aboutImage}
            alt="ICT Department"
            className="w-full h-96 rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
