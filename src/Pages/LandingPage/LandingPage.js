import React from 'react'
import NavBar from '../../Components/Common/NavBar'
import FeatureSection from '../../Components/Pages/Section/FeatureSection'
import HowItWorks from '../../Components/Pages/Section/HowItWorks'
import WhySaviSection from '../../Components/Pages/Section/whyUseSaviSection'
import TestimonialSection from '../../Components/Pages/Section/testimonialsSection'
import { FooterComp } from '../../Components/Pages/Section/Footer'
import { HeaderComp } from '../../Components/Pages/Section/Header'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <HeaderComp/>
        <FeatureSection/>
        <HowItWorks/>
        <WhySaviSection/>
        <TestimonialSection/>
        <FooterComp/>
    </div>
  )
}

export default LandingPage