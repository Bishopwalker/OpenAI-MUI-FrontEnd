import * as React from "react";
import {LoginContainer, LoginContent} from "../../styles/login";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {changeTitle} from "../../redux/pageTitleSlice";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Field, Form} from "react-final-form";
import FormField from "../../components/forms/FormField";
import {validateSignUp} from "../../components/forms/validate";
import HomeLink from '../../components/forms/HomeLink'

const Login = () => {
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch( changeTitle('Login Form'))
    },[])

    const onSubmit = (values: any) => {
        console.log(values)
    }


    return (
        <LoginContainer>
            <HomeLink/>
            <LoginContent>
            <Form
                onSubmit={onSubmit}
                validate={validateSignUp}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Simple Default Input</h2>
                        <div>
                            <label>First Name</label>
                            <Field name="firstName" component="input" placeholder="First Name" />
                        </div>

                        <h2>An Arbitrary Reusable Input Component</h2>
                        <div>
                            <label>Last Name</label>
                            <Field name="interests" component='input' />
                        </div>

                        <h2>Render Function</h2>
                        <Field
                            name="bio"
                            render={({ input, meta }) => (
                                <div>
                                    <label>Bio</label>
                                    <textarea {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />

                        <h2>Render Function as Children</h2>
                        <Field name="phone">
                            {({ input, meta }) => (
                                <div>
                                    <label>Phone</label>
                                    <input type="text" {...input} placeholder="Phone" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <button type="submit">Submit</button>
                    </form>
                )}
            />
            </LoginContent>
        </LoginContainer>
    )
}
export default Login