import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import curriculum from "../../../../data/courses/curiculum";
import specializations from "../../../../data/courses/specializations";

function SemesterList({ semesters }) {
  return (
    <div className="mt-6 grid sm:grid-cols-2 gap-6">
      {semesters.map((sem) => (
        <div key={sem.title}>
          <p className="font-semibold text-gray-800">{sem.title}</p>
          <ul className="mt-2 space-y-1">
            {sem.courses.map((course, index) => (
              <li key={index} className="text-sm text-gray-600 flex gap-2">
                <span className="text-blue-700">•</span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CurriculumAccordion() {
  const [openLevel, setOpenLevel] = useState(null);
  const [openSpec, setOpenSpec] = useState(null);

  const toggleLevel = (level) => {
    setOpenLevel(openLevel === level ? null : level);
    setOpenSpec(null);
  };

  const toggleSpec = (id) => {
    setOpenSpec(openSpec === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          title="Interactive Curriculum"
          subtitle="Explore the Programme Level by Level"
        />

        <div className="mt-14 space-y-4">
          {/* 100 & 200 Level */}
          {curriculum.map((block) => (
            <Card key={block.level}>
              <button
                onClick={() => toggleLevel(block.level)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="font-bold text-gray-900 text-lg">
                  {block.level}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-blue-700 transition-transform duration-300 ${
                    openLevel === block.level ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openLevel === block.level && (
                <SemesterList semesters={block.semesters} />
              )}
            </Card>
          ))}

          {/* 300 Level - Specializations */}
          <Card>
            <button
              onClick={() => toggleLevel("300 Level")}
              className="w-full flex items-center justify-between text-left"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">300 Level</h3>
                <p className="mt-1 text-sm text-blue-700">
                  Choose a Specialization
                </p>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-blue-700 transition-transform duration-300 ${
                  openLevel === "300 Level" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openLevel === "300 Level" && (
              <div className="mt-6 space-y-3">
                {specializations.map((spec) => (
                  <div
                    key={spec.id}
                    className="border border-gray-200 rounded-xl p-4"
                  >
                    <button
                      onClick={() => toggleSpec(spec.id)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-800">
                        {spec.icon} {spec.title}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-blue-700 transition-transform duration-300 ${
                          openSpec === spec.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openSpec === spec.id && (
                      <SemesterList semesters={spec.semesters} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* 400 Level */}
          <Card>
            <button
              onClick={() => toggleLevel("400 Level")}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="font-bold text-gray-900 text-lg">400 Level</h3>
              <ChevronDown
                className={`h-5 w-5 text-blue-700 transition-transform duration-300 ${
                  openLevel === "400 Level" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openLevel === "400 Level" && (
              <SemesterList
                semesters={[
                  {
                    title: "Semester 7",
                    courses: [
                      "Capstone Project",
                      "Scientific Writing and Research Methodology",
                      "Emerging Technologies in ICT",
                      "Software Requirement Engineering",
                    ],
                  },
                  {
                    title: "Semester 8",
                    courses: [
                      "Capstone Project (Cont.)",
                      "Entrepreneurship and Business Development",
                      "Computer Systems Security",
                      "Safety and Risk Management",
                    ],
                  },
                ]}
              />
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CurriculumAccordion;
