import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "Where is KŌAN Studio furniture made?",
      answer: "Every piece is handcrafted in our Kyoto atelier by a small team of artisans trained in traditional Japanese joinery. We work exclusively with sustainably sourced ash, walnut, and white oak.",
    },
    {
      question: "How long does production and delivery take?",
      answer: "Each piece is made to order. Production takes 6–8 weeks, followed by white-glove delivery within 2 weeks. We don't rush — and neither should your space.",
    },
    {
      question: "Can I request custom dimensions or finishes?",
      answer: "Yes. We offer bespoke sizing and a curated selection of natural oil finishes. Reach out through our studio directly — we treat every custom inquiry as a new collaboration.",
    },
    {
        question: " What is your return and care policy?",
        answer: "We stand behind every piece we make. If something arrives damaged, we'll replace it. For care, we recommend a light application of natural beeswax every 6 months to preserve the wood's quiet beauty."
    },
    {
        question: " What makes KŌAN Studio different from other minimalist brands?",
        answer: "Most minimalism removes detail. We remove excess. Our pieces are designed around negative space, natural grain, and function stripped to its core — nothing added that doesn't earn its place."
    }
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