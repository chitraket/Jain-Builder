import React from 'react'
import { CurrentProjectWrapper,CurrentProjectCard,CurrentProjectsCardImage, CurrentProjectCardTitle,CurrentProjectCardDescription } from '../CurrentProjects/CurrentProjectElements'
const ProjectCard = ({items,controls}) => {
  return (
    <CurrentProjectWrapper length={items.length}>
    {
        items.map((item,index)=> (
     <CurrentProjectCard 
         key={index} >
        <CurrentProjectsCardImage src={item.image}/>
        <CurrentProjectCardTitle>{item.name}</CurrentProjectCardTitle>
        <CurrentProjectCardDescription>{item.description}</CurrentProjectCardDescription>
     </CurrentProjectCard>
        ))
    }
    
</CurrentProjectWrapper>
  )
}

export default ProjectCard