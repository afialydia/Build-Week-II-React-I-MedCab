import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import * as Yup from "yup";
import styled from "styled-components";
import {withFormik, Form, Field} from "formik";
import axios from "axios";

const Wrapper = styled.div`
max-width: 80%;
min-height: 40vh;
background-image: url(../img/bgp.jpg);
/* color:rgb(208,136,10); */
margin: 0 auto;
/* align-items:center; */
/* border: 5px dashed; */
/* border-radius:12px; */
display: flex;
flex-direction: column;

`

const LogIn = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
height: 60vh;
/* border: 3px solid rgb(64,64,64); */
background: rgb(206,212,182,.6);
border-radius:12px;
width: 25vw;
align-items: center;
color: rgb(64,64,64)
`;

const Thing = styled.button`
  color: rgb(64,64,64);

  ::before {
    content: '🚀';
  }

  :hover {
    color: rgb(13,112,121);
  }
`



const SignIn = ({
    values,
    errors,
    touched,
    status 
}) =>{

    const [users, setUsers] = useState([])
    useEffect(()=>{
        if (status) {
            setUsers(users => [...users, status])
        }
    }, [status])



    return(
    <Wrapper>
        
        <Form><LogIn>
          
         
          <span>
          <Field className="fields" type="email" name="email" placeholder="Email"/>
          { touched.email && errors.email && <p>{errors.email}</p> }
          </span>

          <span>
          <Field className="fields" type="password" name="password" placeholder="Password"/>
           { touched.password && errors.password && <p>{errors.password}</p> }
           </span>
  

          <Thing type="submit">Submit</Thing>
        </LogIn>
        </Form>
       
        {users.map(user=>( 
            <div key={user.id}>
                <span>Name: {user.name}</span>
                <span>Email: {user.email}</span>
                <span>Desired Role: {user.DesiredRole}</span>
            </div>
        ))}

    </Wrapper>
    )
    }

const FormikSignIn =  withFormik({
    mapPropsToValues({
        name, 
        email, 
        password, 
        ToS, 
        DesiredRole
    }){
        return{
        name: name || "",
        email: email ||'',
        password: password || "",
        ToS: ToS || false,
        DesiredRole: DesiredRole || "Pick One"
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter a name."),
        email: Yup.string().email("Looks like you're missing something. Please enter a valid email address.").required("Please enter a email address."),
        password: Yup.string().min(8).required("Please enter a password."),
    }),
    handleSubmit(values, {setStatus}){
        axios.post('https://reqres.in/api/users', values)
        .then(res =>{
            console.log("these are the values", values)
            setStatus(res.data);
        })
        .catch(err => console.log(err))
    }

})(SignIn);

render(<FormikSignIn />, document.getElementById("root"))

export default FormikSignIn;