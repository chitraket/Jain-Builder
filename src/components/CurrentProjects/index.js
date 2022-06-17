import React from 'react'
import { CurrentProjectContainer,CurrentProjectTitle,CurrentProjectWrapper,CurrentProjectCard,CurrentProjectsCardImage, CurrentProjectCardTitle,CurrentProjectCardDescription } from './CurrentProjectElements'
import Icon1 from '../../images/bg-section.jpg'
import { CurrentProjectData } from '../../data/CurrentProjectData'
import { useScroll } from '../useScroll'
const CurrentProjects = ({}) => {
    const [element, controls] = useScroll();
    const blogsAnimations = {
        hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
      };
  return (
   <CurrentProjectContainer ref={element} id="currentproject" length={CurrentProjectData.length}>
       <CurrentProjectTitle>Current Projects</CurrentProjectTitle>
       <CurrentProjectWrapper length={CurrentProjectData.length}>
           {
               CurrentProjectData.map((item,index)=> (
            <CurrentProjectCard 
                variants={blogsAnimations}
                key={index} 
                animate={controls}
                transition={{
                    delay: 0.03,
                    type: "tween",
                    duration: 0.8,
                }}
                initial="hidden"
                whileInView={{ opacity: 1, y: 0 }}>
               <CurrentProjectsCardImage src={item.image}/>
               <CurrentProjectCardTitle>{item.title}</CurrentProjectCardTitle>
               <CurrentProjectCardDescription>{item.description}</CurrentProjectCardDescription>
            </CurrentProjectCard>
               ))
           }
           
       </CurrentProjectWrapper>
   </CurrentProjectContainer>
  )
}

export default CurrentProjects