import React from 'react'
import { FeatureContainerWrapper } from './FeatureContainerElements'
const FeatureContainer = ({title,bgImage,description}) => {
  return (
    <FeatureContainerWrapper bgImage={bgImage}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
    </FeatureContainerWrapper>
  )
}

export default FeatureContainer