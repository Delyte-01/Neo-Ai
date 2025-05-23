import BenefitSection from '@/features/benefit'
import HeaderSection from '@/features/header'
import HeroSection from '@/features/Hero'
import React from 'react'

const HomePage = () => {
  return (
    <div >
      <HeaderSection />
      <HeroSection />
      <BenefitSection />
    </div>
  )
}

export default HomePage