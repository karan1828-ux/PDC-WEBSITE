import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is PDC?",
    answer:
      "The Personality Development Club (PDC) is a student-led organization dedicated to helping students enhance their communication, leadership, teamwork, confidence, and overall personality through workshops, competitions, events, and interactive learning experiences.",
  },
  {
    question: "What is the vision of PDC?",
    answer:
      "The vision of PDC is to empower students with the confidence, skills, and mindset required to excel in academics, careers, and life by fostering leadership, creativity, continuous learning, and holistic personal growth.",
  },
  {
    question: "What activities does PDC organize?",
    answer:
      "PDC organizes personality development workshops, public speaking sessions, guest lectures, leadership programs, group discussions, competitions, networking events, and various interactive activities that help students grow personally and professionally.",
  },
  {
    question: "How can I become a member of PDC?",
    answer:
      "Students can become a member of the Personality Development Club by participating in the club's recruitment or registration process announced through the official PDC website and social media platforms.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-[#0f274d] py-20 px-6 text-center">

        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-200 mt-5 max-w-2xl mx-auto text-lg">
          Find answers to the most commonly asked questions about the
          Personality Development Club.
        </p>

      </div>

      {/* FAQ Cards */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-[#0f274d] text-xl font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    active === index
                      ? "rotate-180 text-[#f0a04b]"
                      : "text-[#0f274d]"
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="px-6 pb-6 text-[#495057] leading-8">

                    {faq.answer}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Back Button */}

        <div className="text-center mt-14">

          <Link
            to="/"
            className="inline-block bg-[#0f274d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#f0a04b] transition duration-300"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default FAQ;