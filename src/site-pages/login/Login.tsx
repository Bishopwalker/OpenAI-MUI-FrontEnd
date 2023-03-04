import * as React from "react";
import {LoginContainer, LoginContent} from "../../styles/login";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {changeTitle} from "../../redux/pageTitleSlice";
import {Button, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form} from "react-final-form";
import FormField from "../../components/forms/FormField";
import {validateLogin} from "../../components/forms/validate";
import HomeLink from '../../components/forms/HomeLink'
import ErrorWithDelay from "../../components/forms/ErrorWithDelay";
//@ts-ignore
import Wizard from "../../components/forms/Wizard";
// @ts-ignore
import WizardSignup from "../../components/forms/WizardSignup";
import axios from "axios";
import Error from "../../components/forms/Error";
import {changeUserLogInfo} from "../../redux/userLogInfoSlice";


const Login = () => {

    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch( changeTitle('Login Form'))
    },[])
const nav = useNavigate()
    const onSubmit = async (values: any) => {

        // @ts-ignore
        window.alert("Northern Neck Garbage Thanks you for signing up, Click Log in" + JSON.stringify(values, 0, 2))

        await axios.post('http://localhost:8080/auth/nngc/authenticate', values)
            .then((response) => {
                dispatch(changeUserLogInfo({userInfo:response.data.customer, isLoggedIn: true, token: response.data.token}))
         if(response.data.customer) {
             nav('/')
         }
            })
            .catch((error) => {
                console.log(error)
            })

            }


    // @ts-ignore
    return (
        <LoginContainer>
            <HomeLink/>
            <LoginContent>
<WizardSignup
onSubmit={onSubmit}
 >
    <Wizard.Page
        validate={validateLogin}
    >
        <div>
            <label>Email</label>
            <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
            />
            <Error name="email" />
        </div>
        <div>
            <label>Password</label>
            <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
            />
            <Error name="password" />
        </div>
    </Wizard.Page>
</WizardSignup>
            </LoginContent>
        </LoginContainer>
    )
}
export default Login