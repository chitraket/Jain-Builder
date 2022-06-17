import React from 'react'
import { Grid, Box } from "@mui/material";
import { Column2,Column1,InfoContainer,ImgWrap,InfoRow,InfoWrapper,Img ,TextWrapper } from '../InfoSection/InfoElements'
import { useScroll } from '../useScroll'
import Swal from 'sweetalert2'
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import TextfieldWrapper from "../FromsUI/Textfield";
import ButtonWrapper from "../FromsUI/Button";
import SelectWrapper from '../FromsUI/Select';
const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    phone: '',
    message:'',
    selectWork:''
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Required'),
    message: Yup.string()
      .required('Required'),
    selectWork: Yup.string()
      .required('Required')
  });
  const landOwner = {
      "Land Owner":"Land Owner",
      "Brokers":"Brokers",
      "Suppliers":"Suppliers",
      "Contractors":"Contractors",
      "Architect-Engineer":"Architect / Engineer"
  }
const B2B = ({lightBg,id,imgStart,img,alt,isSmall}) => {
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
                <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values,{resetForm}) => {
                  emailjs.send('service_pskycs1', 'template_cmo94q3', values, 'VVF15srncetdFdkhz')
                  .then(response => {
                    console.log('SUCCESS!', response);
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully',
                        text: 'Your message submitted successfully',
                        showConfirmButton:false
                      })
                    resetForm({values:''});
                  }, error => {
                    console.log('Error!', error);
                    Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: error?.text,
                      showConfirmButton:false
                    })
                  });
                }}
              >
                <Box
                  component="form"
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextfieldWrapper
                        label="Name"
                        name="name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextfieldWrapper  label="Email" name="email" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextfieldWrapper
                        label="Phone Number"
                        name="phone"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextfieldWrapper
                        label="Tell Us About Your Needs"
                        name="message"
                        multiline={true}
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <SelectWrapper 
                        name="selectWork"
                        label="Select Work"
                        options={landOwner}
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <ButtonWrapper
                        sx={{ mt: 2, mb: 2, p: 1.5, borderRadius: 10 }}
                      >
                        Get The Details
                      </ButtonWrapper>
                    </Grid>
                  </Grid>
                </Box>
              </Formik>
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

export default B2B