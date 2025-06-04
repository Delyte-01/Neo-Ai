"use client"
import React, { useState } from 'react'
import { ChevronDown } from "lucide-react";
import { Button } from '@/components/ui/button';
import RevealGroup from '@/components/animation/reveal-group';


const faqs = [
  {
    question: "What can this AI-powered app do for me?",
    answer:
      "NeoAI acts as your intelligent personal assistant. It helps you shop smarter, plan trips, book hotels, and track deliveries—all using context-aware AI to save you time and effort.",
  },
  {
    question: "How does the AI improve my shopping experience?",
    answer:
      "The AI uses your shopping history and preferences to recommend highly relevant products, compare prices across platforms, and even alert you to sales or restocks in real time.",
  },
  {
    question: "Can I use the app for travel bookings?",
    answer:
      "Absolutely! NeoAI finds the best flight and hotel deals, provides real-time travel alerts, and automatically fills in booking forms, making travel planning hassle-free.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes, NeoAI uses end-to-end encryption and complies with global data privacy laws like GDPR and CCPA to ensure your data is handled securely and transparently.",
  },
  {
    question: "What subscription plans are available?",
    answer:
      "We offer Free, Pro, and Enterprise plans. Each tier provides more features like deeper personalization, faster response times, and priority support tailored to your needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download the app, sign up with your email or Google account, and the onboarding assistant will guide you through personalizing your experience with NeoAI.",
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-gradient-to-b from-[#0c0d18] via-[#10101e] to-[#10101e] backdrop-blur-md text-white rounded-xl p-4 mb-4  cursor-pointer transition-all duration-300 shadow-sm shadow-[#dda7f8]"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <span className="text-base sm:text-lg font-medium">{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-200">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="min-h-screen  px-4 py-16 place-content-center" id='faq'>
      <RevealGroup>
        <Button className="rounded-full reveal-child flex gap-2 mx-auto font-sora font-normal bg-transparent ring-2 mb-2">
          <div className="w-[25px]">
            <img
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748075419/neo-logo-removebg-preview-crop_o5nmab.png"
              alt=""
            />
          </div>
          <span>FAQ</span>
        </Button>
        <h1 className="text-center reveal-child font-black text-2xl py-3 bg-gradient-to-b from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent md:text-5xl md:max-w-[50%] mx-auto md:leading-12 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="w-full max-w-2xl mx-auto reveal-child">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </RevealGroup>
    </div>
  );
}

export default FAQSection