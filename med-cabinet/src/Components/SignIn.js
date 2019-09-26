import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import * as Yup from "yup";
import styled from "styled-components";
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import auth from "./auth";

const Wrap = styled.div`
max-width: 80%;
margin: 0 auto;
/* align-items:center; */
/* border: 5px dashed; */
/* border-radius:12px; */
display: flex;
flex-direction: column;
height: 30vh;
width: 30vw;
border-radius:12px;
background: rgb(206,212,182,.6);`

const LogIn = styled.div`
display: flex;
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


 
const SignIn = ({
    values,
    errors,
    touched,
    isSubmitting
    
}, props) => (
    <Wrap>
        <Form>
            <LogIn> 

        <div><Field type="text" name="username" placeholder="Username" className="fields" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        </div>

        <div><Field type="password" name="password" placeholder="Password" className="fields" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
       

        <button disabled={isSubmitting} onClick={()=> {
            auth.login(() => {
            });
        }}>
            Submit
        </button>
            </LogIn> 
       </Form>
    </Wrap>
)

const FormikSignIn = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '',
            password: password || ''
        
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(4).required('Username is required'),
        password: Yup.string().required('Password is required')


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
            .post('https://medcabinet-backend.herokuapp.com/api/auth/login', values)
            .then(res=>{
                console.log('login',res)
                setStatus(res.data)
                props.history.push('/search')
            })
            .catch(err=>console.log("somethingswronglogin", err))
    }
})(SignIn)


render(<FormikSignIn />, document.getElementById("root"))

export default FormikSignIn