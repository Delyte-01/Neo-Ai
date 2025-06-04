"use client";
import React from "react";
import { useState } from "react";
import { Check, ChevronDown, GlobeIcon, MapPin } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { SubscriptionCanceledModal } from "./modals/subscription-cancel";
import { CancellationFeedbackModal } from "./modals/cancel-feedback";
import { CancelConfirmationModal } from "./modals/cancel-confirmation";
import FadeIn from "@/components/animation/fadeIn";
import Reveal from "@/components/animation/reveal";


interface PricingPlan {
  name: string;
  price: {
    monthly: {
      NGN: number;
      USD: number;
      CAD: number;
    };
    annually: {
      NGN: number;
      USD: number;
      CAD: number;
    };
  };
  features: string[];
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: {
      monthly: {
        NGN: 9000,
        USD: 9,
        CAD: 9,
      },
      annually: {
        NGN: 8000,
        USD: 8,
        CAD: 8,
      },
    },
    features: [
      "Upload & analyze up to 5 resumes/month",
      "AI-powered resume scoring",
      "Job description match analysis",
      "Basic resume improvement suggestions",
      "Save & download optimized resumes",
    ],
  },
  {
    name: "Advanced",
    price: {
      monthly: {
        NGN: 9000,
        USD: 19,
        CAD: 19,
      },
      annually: {
        NGN: 8000,
        USD: 17,
        CAD: 17,
      },
    },
    features: [
      "Upload & analyze up to 5 resumes/month",
      "AI-powered resume scoring",
      "Job description match analysis",
      "Basic resume improvement suggestions",
      "Save & download optimized resumes",
    ],
  },
  {
    name: "Professional",
    price: {
      monthly: {
        NGN: 5000,
        USD: 29,
        CAD: 29,
      },
      annually: {
        NGN: 4500,
        USD: 26,
        CAD: 26,
      },
    },
    features: [
      "Upload & analyze up to 5 resumes/month",
      "AI-powered resume scoring",
      "Job description match analysis",
      "Basic resume improvement suggestions",
      "Save & download optimized resumes",
    ],
  },
];
  
const countries = [
  {
    name: "Nigeria",
    code: "NGN",
    symbol: "₦",
    flag: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748878448/OIP.jeF2iW5cpvjvcscNmEaxSwHaEK_xmmcbe.jpg",
  },
  {
    name: "United States",
    code: "USD",
    symbol: "$",
    flag: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748878354/OIP_xtquho.jpg",
  },
  {
    name: "Canada",
    code: "CAD",
    symbol: "$",
    flag: "https://res.cloudinary.com/dk5mfu099/image/upload/v1748878409/OIP.O6T8wCqUJO5MZYYOgTjtdgHaEX_l46rcp.jpg",
  },
];
const PrincingPlansSection = () =>
{
  const [isAnnual, setIsAnnual] = useState(false);
  const [activePlan, setActivePlan] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

  // Modal states
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showCanceledModal, setShowCanceledModal] = useState(false);

    
  const filteredCountries = searchQuery
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries;


  const getButtonText = (planName: string) => {
    if (planName === activePlan) {
      return "Cancel subscription";
    }
    if (activePlan) {
      return "Upgrade";
    }
    return "Subscribe";
  };

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setCountryDropdownOpen(false);
      setSearchQuery("");
  };
  const handleCancelSubscription = () => {
    setShowCancelConfirmation(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelConfirmation(false);
    setShowFeedbackModal(true);
  };

  const handleFeedbackSubmit = (reason: string, details?: string) => {
    console.log("Cancellation reason:", reason, details);
    setShowFeedbackModal(false);
    setShowCanceledModal(true);
    setActivePlan("");
  };

  const handleResubscribe = () => {
    setShowCanceledModal(false);
    setActivePlan("Advanced");
  };

  const handleExploreFeatures = () => {
    setShowCanceledModal(false);
  };

  const handlePlanAction = (planName: string) => {
    if (planName === activePlan) {
      handleCancelSubscription();
    } else {
      setActivePlan(planName);
    }
  };

  const formatPrice = (price: number) => {
    if (selectedCountry.code === "NGN") {
      return `₦${price.toLocaleString()}`;
    }
    return `${selectedCountry.symbol}${price}`;
  };

  return (
    <div className=" min-h-[160vh] lg:min-h-[120vh] px-4 lg:px-40 place-content-center py-12" id="pricing">

      <Reveal>
      <div className="flex flex-col justify-center text-center py-3 mb-2">
        <h1 className="font-sora text-2xl md:text-4xl font-semibold lg:text-5xl  bg-gradient-to-b from-[#c5bfc8] via-[#ffff] to-[#bbb5c8] bg-clip-text text-transparent">
          Pricing
        </h1>
        <p className="text-[16px] md:max-w-[60%]  mx-auto mt-2 lg:max-w-[40%]">
          Explore our flexible subscription plans designed to enhance your
          shopping, delivery, and travel experience.
        </p>
        </div>
        </Reveal>


      <Reveal>
        <div className="flex justify-center space-x-6 items-center text-[20px] font-sora mb-2">
          <span
            className={`font-medium ${
              !isAnnual ? "text-[#dda7f8]" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={() => setIsAnnual(!isAnnual)}
            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-yellow-400"
          />
          <span
            className={`font-medium ${
              isAnnual ? "text-[#dda7f8]" : "text-gray-500"
            }`}
          >
            Annually
          </span>
        </div>
      </Reveal>

      <FadeIn>
        <div className="relative w-full max-w-xs mx-auto mb-[20px] ">
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-2 shadow-nav shadow-[#292D320D] rounded-3xl bg-white cursor-pointer"
            onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
          >
            <div className="flex items-center gap-2 text-black  w-full">
              <MapPin size={16} />
              <span>{selectedCountry.name}</span>
              <span className="ml-auto ring-[#05090e] rounded-full ring p-1 overflow-hidden w-[30px] h-[30px]">
                <img
                  src={selectedCountry.flag}
                  alt=""
                  className=" rounded-full "
                />
              </span>
            </div>
            <ChevronDown size={16} />
          </button>

          {countryDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-3xl py-2 shadow-lg max-h-[467px] overflow-auto font-sora">
              <div className="p-2  flex items-center">
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66659 14.4987C11.1644 14.4987 13.9999 11.6632 13.9999 8.16536C13.9999 4.66756 11.1644 1.83203 7.66659 1.83203C4.16878 1.83203 1.33325 4.66756 1.33325 8.16536C1.33325 11.6632 4.16878 14.4987 7.66659 14.4987Z"
                      stroke="#90989F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6666 15.1654L13.3333 13.832"
                      stroke="#90989F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-1  rounded-md text-[12px] outline-0 text-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {filteredCountries.map((country) => (
                <button
                  key={country.name}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() => handleCountrySelect(country)}
                >
                  <span>{country.name}</span>
                  <span className="ml-auto ring-[#05090e] rounded-full ring p-1 overflow-hidden w-[30px] h-[30px]">
                    <img src={country.flag} alt="" className=" rounded-full " />
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-7   md:max-h-[485px] md:px-5">
        {plans.map((plan) => {
          const isActive = plan.name === activePlan;
          const price = isAnnual
            ? plan.price.annually[
                selectedCountry.code as keyof typeof plan.price.annually
              ]
            : plan.price.monthly[
                selectedCountry.code as keyof typeof plan.price.monthly
              ];

          return (
            <FadeIn>
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden  md:p-[20px] transition-colors duration-150 shadow-sm shadow-[#2f3338] ${
                  isActive
                    ? "bg-gradient-to-br  from-[#4a3966] via-[#825ed8] to-[#e2aaf5] text-white "
                    : "bg-gradient-to-br  from-[#05090e] via-[#221b36] to-[#503d7a] "
                }`}
              >
                {isActive && (
                  <div className=" py-1 px-4 text-right mt-[10px] md:mt-0 ">
                    <span className="text-xs font-medium bg-[#04070e] text-white  ml-auto px-4 py-2  rounded-full cursor-pointer">
                      Active
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div
                    className={`text-white text-[16px] font-sora md:text-[20px] font-bold`}
                  >
                    {plan.name} plan
                  </div>

                  <div className="mt-2 flex items-baseline font-sora text-white">
                    <span className="text-[44px] font-bold ">
                      {formatPrice(price)}
                    </span>
                    <span className="ml-1 text-sm">per month</span>
                  </div>

                  <Button
                    className={`w-full mt-4 text-[16px] cursor-pointer rounded-2xl font-sora ${
                      isActive
                        ? "bg-white text-[#04070e]  hover:bg-gray-100"
                        : "bg-transparent text-white hover:bg-[#04070e] ring-2 hover:ring-0"
                    }`}
                    onClick={() => handlePlanAction(plan.name)}
                  >
                    {getButtonText(plan.name)}
                  </Button>

                  <div className="mt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div
                            className={`mr-2 mt-1 rounded-full p-1 ${
                              isActive ? "bg-blue-400" : "bg-blue-100"
                            }`}
                          >
                            <Check
                              size={12}
                              className={
                                isActive ? "text-white" : "text-blue-600"
                              }
                            />
                          </div>
                          <span className="text-[16px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Modals */}
      <CancelConfirmationModal
        isOpen={showCancelConfirmation}
        onClose={() => setShowCancelConfirmation(false)}
        onConfirm={handleConfirmCancel}
      />

      <CancellationFeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onSubmit={handleFeedbackSubmit}
      />

      <SubscriptionCanceledModal
        isOpen={showCanceledModal}
        onClose={() => setShowCanceledModal(false)}
        expiryDate="02/08/2025"
        onResubscribe={handleResubscribe}
        onExploreFeatures={handleExploreFeatures}
      />
    </div>
  );
};

export default PrincingPlansSection;
