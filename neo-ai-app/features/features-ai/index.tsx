import React from 'react'
import { Mic, ShieldCheck, Bot, Settings } from "lucide-react";
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Settings className="text-white w-5 h-5" />,
    title: "Instant Task Automation",
    description:
      "Handles purchases, bookings, and deliveries in seconds, saving you time and effort.",
  },
  {
    icon: <Bot className="text-white w-5 h-5" />,
    title: "Smart AI Assistance",
    description:
      "Understands your needs and adapts to your preferences for a seamless experience.",
  },
  {
    icon: <ShieldCheck className="text-white w-5 h-5" />,
    title: "Reliable & Secure",
    description:
      "Ensures data protection and 99.9% uptime for uninterrupted service.",
  },
  {
    icon: <Mic className="text-white w-5 h-5" />,
    title: "Effortless Voice Control",
    description:
      "Manage everything hands-free with intuitive AI-powered commands.",
    spanName: "lg:col-start-2",
  },
];
const FeaturesSection = () => {
  return (
    <div className=" min-h-[120vh] lg:min-h-[100vh] py-9  place-content-center">
      <Button className="rounded-full flex gap-2 mx-auto font-sora font-normal bg-transparent ring-2">
        <div className="w-[25px]">
          <img
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748075419/neo-logo-removebg-preview-crop_o5nmab.png"
            alt=""
          />
        </div>
        <span>Features</span>
      </Button>
      <h1 className="text-center font-black text-2xl py-3 bg-gradient-to-b from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent md:text-5xl md:max-w-[40%] mx-auto md:leading-12">
        Revolutionary Power & Capabilities of NeoAI
      </h1>
      <section className="py-10 px-4   text-white ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 min-h-60 shadow-sm shadow-[#35416c] hover:shadow-lg backdrop-blur-md transition ${feature.spanName} cursor-pointer bg-[#0e0e19] justify-center flex flex-col`}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#281a57] via-[#05090e] to-[#35416c] ring-[#35416c] ring-2">
                {feature.icon}
              </div>
              <h3 className="text-lg  mb-2 font-sora font-normal md:text-[20px]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 md:text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection