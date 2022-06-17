import React from 'react'
import FeatureContainer from '../components/FeatureContainer'
import InfoSection from '../components/InfoSection'
import { FeatureContainerAboutUsData } from '../data/FeatureContainerData'
import { aboutUsOne, aboutUsTwo } from '../data/InfoSectionData'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const AboutUs = () => {
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  React.useEffect(() => {
    window.scrollTo({top:0})
  }, [])
  return (
    <>
      <FeatureContainer {...FeatureContainerAboutUsData}/>
      <InfoSection {...aboutUsOne}/>
      <InfoSection {...aboutUsTwo}/>
      {/* <LoadScript
          googleMapsApiKey='AIzaSyD4mtKzgBbLS0eNFxsAj44E3kCSvxEubtw'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
        </LoadScript> */}
    </>
  )
}

export default AboutUs