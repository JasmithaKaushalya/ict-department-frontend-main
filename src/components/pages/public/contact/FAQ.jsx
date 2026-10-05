import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import contactFaq from "../../../../data/contact/contactFaq";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (contactFaq.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Common Questions"
        />

        <div className="mt-14 space-y-4">
          {contactFaq.map((item) => (
            <Card key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-gray-900">{item.question}</h3>

                {openId === item.id ? (
                  <Minus className="h-5 w-5 text-blue-700 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-700 flex-shrink-0" />
                )}
              </button>

              {openId === item.id && (
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
