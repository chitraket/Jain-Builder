import { Grid, Box, Button } from "@mui/material";
import React from "react";
import Swal from 'sweetalert2'
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import {
  Column2,
  Column1,
  InfoContainer,
  ImgWrap,
  InfoRow,
  InfoWrapper,
  TopLine,
  Heading,
  Subtitle,
  TextWrapper,
} from "../InfoSection/InfoElements";
import TextfieldWrapper from "../FromsUI/Textfield";
import ButtonWrapper from "../FromsUI/Button";
const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  message:'',
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
});
function Contact({
  lightBg,
  id,
  lightText,
  lightTextDesc,
  headline1,
  description1,
  headline2,
  description2,
  topLine,
  isSmall,
}) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={false}>
          <Column1>
            <TextWrapper>
              {topLine && <TopLine>{topLine && topLine}</TopLine>}
              {headline1 && (
                <Heading lightText={lightText && lightText} isSmall={isSmall}>
                  {headline1}
                </Heading>
              )}
              {description1 && (
                <Subtitle lightTextDesc={lightTextDesc && lightTextDesc}>
                  {description1}
                </Subtitle>
              )}
              {headline2 && (
                <Heading lightText={lightText && lightText} isSmall={isSmall}>
                  {headline2}
                </Heading>
              )}
              {description2 && (
                <Subtitle lightTextDesc={lightTextDesc && lightTextDesc}>
                  {description2}
                </Subtitle>
              )}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
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
                      <ButtonWrapper
                        sx={{ mt: 2, mb: 2, p: 1.5, borderRadius: 10 }}
                      >
                        Get The Details
                      </ButtonWrapper>
                    </Grid>
                  </Grid>
                </Box>
              </Formik>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
export default Contact;
