import React, { useState } from 'react';
import './Faq.scss';
import FAQ from '../../Components/Faq/Faqi';

const Faq = () => {
  const faqData = [
    {
      question: 'What is FAQ?',
      answer:
        'FAQ stands for Frequently Asked Questions. It is a collection of common questions and their respective answers.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team through email or phone. Visit our Contact Us page for more information.',
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancle your order of purchase. Please refer to our Return Policy for more details.',
    },
    {
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to provide information about our products and services.",
    },
    {
      question: "How do I create an account?",
      answer:
        'To create an account, click on the "Sign Up" button in the top right corner of the page and follow the instructions.',
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept Visa, Mastercard, and American Express.",
    },
    {
      question: "Maximum time to deliver an order?",
      answer: "It depends upon the location and your order.",
    },
    {
      question: "Is cash on delivery available?",
      answer: "Yes,It is availbale.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-page contain-bg">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <p className="faq-description">Find answers to common questions about our products and services.</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
