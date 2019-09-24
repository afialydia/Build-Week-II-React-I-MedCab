import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import * as Yup from "yup";
import styled from "styled-components";
import {withFormik, Form, Field} from "formik";
import axios from "axios";

const Wrapper = styled.div`
max-width: 80%;
min-height: 40vh;
/* color:rgb(208,136,10); */
margin: 0 auto;
/* align-items:center; */
/* border: 5px dashed; */
/* border-radius:12px; */
display: flex;
flex-direction: column;`

const LogIn = styled.div`
display:flex;
flex-direction: column;
/* justify-content: space-evenly; */
height: 60vh;
background: rgb(206,212,182,.6);
border-radius:12px;
width: 25vw;
align-items: center;
color: rgb(64,64,64);`


/* 
const Thing = styled.button`
  color: rgb(64,64,64);

  ::before {
    content: '🚀';
  }

  :hover {
    color: rgb(13,112,121);
  }
` */

const SignUp = ({
    values,
    errors,
    touched,
    isSubmitting
    
}) => (
    
        <Form><LogIn> 

        <div><Field type="text" name="username" placeholder="Choose Username" className="fields" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        </div>

        <div><Field type="password" name="password" placeholder="Password" className="fields" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        
        <label>I am 21+ years old. <Field type ="checkbox" name="over20" checked={values.over20}/></label>

        <Field className="fields" component="select" name="use">
            <option value="Pick One"> Pick One</option>
            <option value="Medical Use"> Medical Use</option>
            <option value="Recreational Use">Recreational Use</option>
            <option value="A Bit of Both">A Bit of Both</option>
        </Field>

        <button disabled={isSubmitting}>Submit</button>
       </LogIn> </Form>
    
)

const FormikSignUp = withFormik({
    mapPropsToValues({username, password, over20, use}){
        return{
            username: username || '',
            password: password || '',
            over20: over20 || false,
            use: use || 'Pick One'
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(4).required('Username is required'),
        password: Yup.string().min(8).required('Password is required')
        // over20: Yup.checked().required()
    }),
    handleSubmit(values, {
        resetForm, 
        setErrors,
        setSubmitting,
        setStatus
    }){
        console.log(values)
        if( values.username === 'Shelly12'){
            setErrors({ username: 'Username already taken.'})
        } else {
            resetForm()
        }
        setSubmitting(false)

        axios
            .post('https://medcabinet-backend.herokuapp.com/api/auth/register',values)
            .then(res =>{
                console.log('axios',res)
                setStatus(res.data)
            })
        .catch(err =>console.log("somethingswrongsignup", err))

    }
})(SignUp)


render(<FormikSignUp />, document.getElementById("root"))

export default FormikSignUp;

// https://medcabinet-backend.herokuapp.com/api/auth/register