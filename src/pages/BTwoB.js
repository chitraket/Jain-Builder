import React from 'react'
import B2B from '../components/B2B/B2B'
import FeatureContainer from '../components/FeatureContainer'
import { FeatureContainerB2BData } from '../data/FeatureContainerData'
import { B2BData } from '../data/InfoSectionData'

const BTwoB = () => {
  return (
    <>
    <FeatureContainer {...FeatureContainerB2BData}/>
    <B2B {...B2BData}/>
    </>
  )
}

export default BTwoB