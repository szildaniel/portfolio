import React, {useState} from "react"
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 import {H1} from '../../styles/bio/H1';
 const MyForm = () => { 
   
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const sendData = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/10fb6018-dad7-46df-a18c-5947122dee59",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks! Your message is correctly sended.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return ( 
   <div>
     <H1 color="white" bgText={`"Contact"`}>
        Contact Form
      </H1>
     <Formik
       initialValues={{ email: 'Email Adress', name: 'Name',message: 'Message' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }, e) => {
         setTimeout(() => {
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form onSubmit={sendData} >
           <Field type="text" required name="name"  />
           <Field type="email" required name="email"  />
           <ErrorMessage name="email" component="div" className="errorDiv"/>
           <Field as="textarea" rows="5" cols="33" wrap="hard" required type="textarea" name="message" />
           <button type="submit" disabled={serverState.submitting}>
             Send message
           </button>
           {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
         </Form>
       )}
     </Formik>
   </div>
 )};
 
 export default MyForm;