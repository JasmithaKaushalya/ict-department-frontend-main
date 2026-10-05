import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import faq from "../../../../data/courses/faq";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Common Questions About the Programme"
        />

        <div className="mt-14 space-y-4">
          {faq.map((item, index) => (
            <Card key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-gray-900">{item.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-blue-700 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-7">{item.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
