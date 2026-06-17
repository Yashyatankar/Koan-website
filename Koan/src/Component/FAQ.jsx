import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind is a utility-first CSS framework.",
    },
    {
      question: "Is React easy to learn?",
      answer: "Yes, once you understand components and state management.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-zinc-700 py-4"
        >
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <h3 className="text-lg font-semibold">
              {faq.question}
            </h3>

            <span>
              {openIndex === index ? "-" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-40 mt-3"
                : "max-h-0"
            }`}
          >
            <p className="text-zinc-400">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;