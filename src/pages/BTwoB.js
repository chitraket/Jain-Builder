import React from 'react'
import B2B from '../components/B2B/B2B'
import FeatureContainer from '../components/FeatureContainer'
import PageSeo from '../components/PageSeo'
//import PageSeo from '../components/PageSeo'
import { FeatureContainerB2BData } from '../data/FeatureContainerData'
import { B2BData } from '../data/InfoSectionData'

const BTwoB = () => {
  React.useEffect(() => {
    window.scrollTo({top:0})
  }, [])
  return (
    <>
    <PageSeo {...FeatureContainerB2BData?.pageSeo}/>
    <FeatureContainer {...FeatureContainerB2BData}/>
    <B2B {...B2BData}/>
    </>
  )
}

export default BTwoB