
"use client"

import Loader from '@/components/animation/loading-screen'
import BenefitSection from '@/features/benefit'
import FAQSection from '@/features/faq-section'
import FeaturesSection from '@/features/features-ai'
import Footer from '@/features/footer'
import HeaderSection from '@/features/header'
import HeroSection from '@/features/Hero'
import PrincingPlansSection from '@/features/pricing-plans'
import ReviewSection from '@/features/reviews'
import SpecialOffers from '@/features/special-offers'
import SponsorsSection from '@/features/sponsors'
import { useState } from 'react'


const HomePage = () =>
{
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      {!loadingComplete && (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )}
      {loadingComplete && (
        <>
          <HeaderSection />
          <HeroSection />
          <SponsorsSection />
          <BenefitSection />
          <FeaturesSection />
          <PrincingPlansSection />
          <ReviewSection />
          <FAQSection />
          <SpecialOffers />
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage