import React from 'react'
import Helmet from 'react-helmet'

const PageSeo = ({title,description,ogTitle,ogDescription,ogUrl,ogSiteName,ogType,keywords,noIndex,noFollow,ogImage}) => {
  return (
    <Helmet>‍
        <title>{title ? title : 'Jain Builders PVT. LTD'}</title>‍
        {description && <meta name="description" content={description} />}         
        {keywords && <meta name="keywords" content={keywords} />}
			{noIndex && <meta name="robots" content="noindex" />}
			{noFollow && <meta name="robots" content="nofollow" />}     
        {/* <meta name="twitter:site" content="@user" />        
        <meta name="twitter:creator" content="@user" />        
        <meta name="twitter:title" content="Pets - Products" />        
        <meta name="twitter:description" content="Best Products for your pet" />        
        <meta name="twitter:image" content="url_to_image"/>         */}
        {/* <meta name="twitter:card" content="summary_large_image" />   */}
        {ogTitle && <meta property="og:title" content={ogTitle} />   }     
        {ogDescription && <meta property="og:description" content={ogDescription} />}        
        {ogImage && <meta property="og:image" content={ogImage}/>}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
        <meta property="og:locale" content="en_US" />
        {ogType && <meta property="og:type" content={ogType} />}
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
  )
}

export default PageSeo