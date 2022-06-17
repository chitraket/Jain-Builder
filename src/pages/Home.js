import React from 'react'
import BackgroundInfoSection from '../components/BackgroundInfoSection'
import CurrentProjects from '../components/CurrentProjects'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import PageSeo from '../components/PageSeo'
import Testimonials from '../components/Testimonials'
import { HomeSeoData } from '../data/FeatureContainerData'
import { homeObjOne, homeObjTwo } from '../data/InfoSectionData'
import { SliderData } from '../data/SliderData'
const Home = () => {
  React.useEffect(() => {
    window.scrollTo({top:0})
  }, [])
  return (
      <>
    <PageSeo {...HomeSeoData}/>
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