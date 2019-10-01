import React, {useState, useEffect} from "react";
import {render, BrowserRouter} from "react-dom";
import * as Yup from "yup";
import styled from "styled-components";
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import auth from "./auth";
// css file to style form inputs
import './fields-modifications.css';
import { Button } from 'semantic-ui-react'

const Wrap = styled.div`
max-width: 80%;
margin: 0 auto;
/* align-items:center; */
/* border-radius:12px; */
display: flex;
flex-direction: column;
width: 30vw;
border-radius:12px;
background: rgb(206,212,182,.6);`

const LogIn = styled.div`
display:flex;
flex-direction: column;
/* justify-content: space-evenly; */
padding: 10%;
align-items: center;
margin: auto;
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
    
},props) => (
    <Wrap>
        <Form><LogIn> 

        <div><Field type="text" name="username" placeholder="Choose Username" className="fields" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        </div>

        <div><Field type="password" name="password" placeholder="Password" className="fields" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        </div>

        <div><Field type="password" name="confirmPassword" placeholder="Confirm Password" className="fields" />
        {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        
        <label className="confirm-age">I am over 21<Field type ="checkbox" name="over20" checked={values.over20}className="fields"/></label>

        <Field className="fields" component="select" name="use">
            <option value="Pick One"> Pick One</option>
            <option value="Medical Use"> Medical Use</option>
            <option value="Recreational Use">Recreational Use</option>
            <option value="A Bit of Both">A Bit of Both</option>
        </Field>

        <Button disabled={isSubmitting} onClick={()=> {
            auth.login(() => {
            });
        }}>
            Submit
        </Button>
           </LogIn>
        </Form>
    </Wrap>
    
)

const FormikSignUp = withFormik({
    mapPropsToValues({username, password, confirmPassword, over20, use}){
        return{
            username: username || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
            over20: over20 || false,
            use: use || 'Pick One'

        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(4).required('Username is required'),
        password: Yup.string().min(8).required('Password is required'),
        confirmPassword: Yup.string().required('Password is required').label("Confirm Password").test("passwords-match", "passwords must match", function(value){return this.parent.password === value;}),
        over20: Yup.boolean().oneOf([true], 'Must be at leadt 21 years old to enter')
    }),
    handleSubmit(values, {
        resetForm, 
        setErrors,
        setSubmitting,
        setStatus,
        props
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
                props.history.push('/search')

            })
        .catch(err =>console.log("somethingswrongsignup", err))

    }
})(SignUp)


render(<FormikSignUp />, document.getElementById("root"))

export default FormikSignUp;

// https://medcabinet-backend.herokuapp.com/api/auth/register