import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
const faqs = [
    {
      question: "What services does Imperium Health Group offer?",
      answer:
        "When selecting a builder in Thrissur, consider factors such as their experience, reputation, portfolio of completed projects, licenses and certifications, quality of materials used, adherence to timelines, and customer reviews. It is also advisable to request quotations and compare them to ensure competitive pricing.",
    },
    { question: "How does the process work?", answer: "The process involves several steps, starting with..." },
    { question: "Why should I choose Imperium Health Group?", answer: "Imperium Health Group offers..." },
    { question: "Is my medical information kept confidential?", answer: "Yes, your medical records are strictly..." },
    { question: "What are the costs involved in medical travel?", answer: "Medical travel costs depend on..." },
    { question: "Can you help with visa arrangements?", answer: "Yes, we provide assistance with..." },
    { question: "How do I know which hospital is right for me?", answer: "Our team will help you find..." },
  ];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <section className="container mx-auto px-6 py-12" style={{background:"#EBF2FF"}}>
      {/* Section Title */}
      <div className="flex items-center justify-center w-full my-10">
        <div className="relative flex items-center">
          {/* Left and Right Fading Lines */}
          <span className="absolute left-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          <span className="absolute right-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-l from-transparent via-blue-400 to-transparent"></span>

          {/* Centered Text */}
          <span className="relative px-6 py-2 border border-blue-500 rounded-full bg-white text-blue-800 font-semibold text-lg">
            FAQS
          </span>
        </div>
        {/* {our Specialties} */}
      </div>

      {/* FAQ Box */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border mt-2 rounded-lg border-blue-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 px-4 text-left focus:outline-none"
            >
              <span className="font-medium text-blue-900">{faq.question}</span>
              {openIndex === index ? <FaMinus className="text-blue-900" /> : <FaPlus className="text-blue-900" />}
            </button>
            {openIndex === index && <p className="px-4 pb-4 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
