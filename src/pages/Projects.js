import React from 'react'
import FeatureContainer from '../components/FeatureContainer'
import Project from '../components/Project'
import { FeatureContainerB2BData } from '../data/FeatureContainerData'

const Projects = () => {
  return (
    <>
    <FeatureContainer {...FeatureContainerB2BData}/>
    <Project/>
    </>
  )
}

export default Projects