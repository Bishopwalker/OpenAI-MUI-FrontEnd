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
import ErrorWithDelay from "../../components/forms/ErrorWithDelay";

const Login = () => {
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch( changeTitle('Login Form'))
    },[])

    const onSubmit = (values: any) => {
        console.log(values)
    }


    // @ts-ignore
    return (
        <LoginContainer>
            <HomeLink/>
            <LoginContent>
            <Form
                onSubmit={onSubmit}
                validate={validateSignUp}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type="email" placeholder="Email" />
                                    <ErrorWithDelay name="email" delay={1000}>
                                        {/* @ts-ignore*/}
                                        {error => <span>{error}</span>}
                                    </ErrorWithDelay>
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Last Name</label>
                                    <input {...input} type="password" placeholder="Password" />
                                    <ErrorWithDelay name="password" delay={1000}>
                                        {/* @ts-ignore*/}
                                        {error => <span>{error}</span>}
                                    </ErrorWithDelay>
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        {/* @ts-ignore*/}
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
            </LoginContent>
        </LoginContainer>
    )
}
export default Login