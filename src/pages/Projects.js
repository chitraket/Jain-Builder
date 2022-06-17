import React from 'react'
import FeatureContainer from '../components/FeatureContainer'
import PageSeo from '../components/PageSeo'
import Project from '../components/Project'
import { FeatureContainerB2BData, FeatureContainerProjectsData } from '../data/FeatureContainerData'

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo({top:0})
  }, [])
  return (
    <>
    <PageSeo {...FeatureContainerProjectsData?.pageSeo}/>
    <FeatureContainer {...FeatureContainerProjectsData}/>
    <Project/>
    </>
  )
}

export default Projects