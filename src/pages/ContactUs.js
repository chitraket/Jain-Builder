import React from 'react'
import Contact from '../components/Contact/Contact'
import FeatureContainer from '../components/FeatureContainer'
import { FeatureContainerContactUsData } from '../data/FeatureContainerData'
import { ContactUsData } from '../data/InfoSectionData'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PageSeo from '../components/PageSeo'
const ContactUs = () => {
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
      <PageSeo {...FeatureContainerContactUsData?.pageSeo}/>
        <FeatureContainer {...FeatureContainerContactUsData}/>
        <Contact {...ContactUsData}/>
        <LoadScript
          googleMapsApiKey='AIzaSyD4mtKzgBbLS0eNFxsAj44E3kCSvxEubtw'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
        </LoadScript>
    </>
  )
}

export default ContactUs