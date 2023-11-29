import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import "./faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "Will investors be able to have multiple Common Account Numbers?",
      answer:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      isOpen: false,
    },
    {
      id: 3,
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      isOpen: false,
    },
  ]);

  const toggleFaqs = (index) => {
    const updatedFaqs = [...faqs];
    // If isOpen of currentElement is open then close it
    if (updatedFaqs[index].isOpen) {
      updatedFaqs[index].isOpen = false;
    } else {
      // Else remove true values from the array of object and add true only on current object
      updatedFaqs.map((faq) => {
        faq.isOpen = false;
      });
      updatedFaqs[index].isOpen = true;
    }

    setFaqs(updatedFaqs);
  };

  return (
    <section className="faq-section">
      <div className="header">
        <h2>FAQ</h2>
      </div>
      <div className="section-body">
        {faqs.map((faq, index) => (
          <article key={faq.id}>
            <div className="faq-container">
              <div className="qustion-container">
                <p>{faq.question}</p>
                <button
                  onClick={() => toggleFaqs(index)}
                  className="faq-button"
                >
                  {faq.isOpen ? (
                    <AiFillMinusCircle size={32} />
                  ) : (
                    <AiFillPlusCircle color="#525252" size={32} />
                  )}
                </button>
              </div>
              {faq.isOpen && (
                <div className="answer-container">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
            <hr />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faq;
