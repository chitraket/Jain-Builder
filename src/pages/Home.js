import { MotionConfig } from 'framer-motion'
import React from 'react'
import BackgroundInfoSection from '../components/BackgroundInfoSection'
import CurrentProjects from '../components/CurrentProjects'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Testimonials from '../components/Testimonials'
import { homeObjOne, homeObjTwo } from '../data/InfoSectionData'
import { SliderData } from '../data/SliderData'
const Home = () => {
  return (
      <>
    <Hero slides={SliderData}/>
    <InfoSection {...homeObjOne}/>
    <BackgroundInfoSection/>
    <CurrentProjects/>
    <InfoSection {...homeObjTwo}/>
    <Testimonials/>
    </>
  )
}

export default Home