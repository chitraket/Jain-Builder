import React from 'react'
import FeatureContainer from '../components/FeatureContainer'
import InfoSection from '../components/InfoSection'
import PageSeo from '../components/PageSeo'
import { FeatureContainerCreatorData } from '../data/FeatureContainerData'
import { CreatorFive, CreatorFour, CreatorOne, CreatorThree, CreatorTwo } from '../data/InfoSectionData'

const Creator = () => {
  React.useEffect(() => {
    window.scrollTo({top:0})
  }, [])
  return (
    <>
    <PageSeo {...FeatureContainerCreatorData?.pageSeo}/>
    <FeatureContainer {...FeatureContainerCreatorData}/>
    <InfoSection {...CreatorOne}/>
    <InfoSection {...CreatorTwo}/>
    <InfoSection {...CreatorThree}/>
    <InfoSection {...CreatorFour}/>
    <InfoSection {...CreatorFive}/>
   </>
  )
}

export default Creator