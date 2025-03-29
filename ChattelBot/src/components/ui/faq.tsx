"use client";

import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Where can my chatbot be used?",
      answer:
        "Your chatbot's integrations can be virtually endless—from your landing page to WhatsApp, Notion, Slack, Zapier, and more!",
    },
    {
      question: "How do I get my customer’s data?",
      answer:
        "As soon as a lead is collected or a question is submitted, you can be notified and emailed straight away.",
    },
    {
      question: "What AI knowledge base is used?",
      answer:
        "We use a mix of ChatGPT, Gemini, Claude, and more to ensure your bot is always at the top of its game. The bot will then retrive upon your website data along with knowledge base document that we'll create with you.",
    },
    {
      question: "How efficient is it?",
      answer:
        "We can create a free demo tailored to your business within 24 hours, so you can see for yourself!",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fafaf8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          FAQ (or just ask our bot)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
