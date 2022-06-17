import React from 'react'
import { Column2,Column1,InfoContainer,ImgWrap,InfoRow,InfoWrapper,TopLine,Heading,Subtitle, Img ,TextWrapper,BtnWrap } from './InfoElements'
import { SecondaryButton } from '../../globalStyles'
import { useScroll } from '../useScroll'

const InfoSection = ({lightBg,id,imgStart,lightText,lightTextDesc,headline,description,buttonLabel,img,alt,topLine,button,isSmall,buttonLink}) => {
    const imageAnim = {
        hidden:{opacity:0, y: -100, height:'110%',widht:'110%'},
        show: {opacity:1,y:0 , height:'100%', widht:'100%',transition:{duration:1, ease: "easeOut", staggerChildren: 1}},
    } 
    const leftAnim = {
        hidden:{opacity:0, x: -100},
        show: {opacity:1,x:0 ,transition:{duration:0.8, ease: "easeOut", staggerChildren: 1}},
        
    }
    const rightAnim = {
        hidden:{opacity:0, x: 100},
        show: {opacity:1,x:0 ,transition:{duration:1.5, ease: "easeOut", staggerChildren: 1}},
        
    }
    const [element,controls] = useScroll();
  return (
    <InfoContainer lightBg={lightBg} id={id} ref={element} >
        <InfoWrapper variants={imgStart ? rightAnim : leftAnim}  animate={controls} transition={{delay:0.03,type:"tween",duration:0.8}} whileInView={{ opacity: 1, y: 0 }}>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                     {topLine && (<TopLine>{topLine && topLine}</TopLine>)}
                   {headline &&  (<Heading lightText={lightText && lightText} isSmall={isSmall}>{headline}</Heading>)}
                    {description && ( <Subtitle lightTextDesc={lightTextDesc && lightTextDesc}>{description}</Subtitle>)}
                    {button && (<BtnWrap>
                        <SecondaryButton to={buttonLink} primary>{buttonLabel}</SecondaryButton>
                    </BtnWrap>)}
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap isSmall={isSmall}>
                        <Img  src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection