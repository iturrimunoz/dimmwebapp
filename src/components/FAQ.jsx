import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      category: "Nuclear Therapies",
      questions: [
        {
          q: "What are nuclear medicine treatments?",
          a: "Nuclear medicine treatments use radioactive substances to target and destroy cancer cells while minimizing damage to surrounding healthy tissue."
        },
        {
          q: "How effective are nuclear therapies for cancer treatment?",
          a: "Effectiveness varies by cancer type, but many patients experience significant improvement or remission."
        },
        {
          q: "Are there side effects associated with nuclear therapies?",
          a: "Common side effects may include fatigue, nausea, and localized pain; however, many patients tolerate these therapies well."
        }
      ]
    },
    {
      category: "PET Scans",
      questions: [
        {
          q: "What is a PET scan and how does it work?",
          a: "A PET scan uses a small amount of radioactive material to visualize metabolic activity in the body, helping detect cancer and other diseases."
        },
        {
          q: "Is a PET scan safe?",
          a: "Yes, PET scans are considered safe; the radiation exposure is minimal and comparable to other imaging tests."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        {faqs.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
            <div className="space-y-6">
              {category.questions.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 