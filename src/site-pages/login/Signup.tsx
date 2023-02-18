import * as React from "react";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {changeTitle} from "../../redux/pageTitleSlice";
import {LoginContainer, LoginContent} from "../../styles/login";
import {Box, Button, Grid, Typography} from "@mui/material";
import {  Link} from "react-router-dom";
import { Field, Form, FormSpy} from 'react-final-form';
import {ReactNode} from "react";
import {
    validateFirstName,
    validateLastName,
    validateLogin,
    validatePhone,
    validateService,
    validateSignUp
} from "../../components/forms/validate";
import HomeLink from '../../components/forms/HomeLink'
{/* @ts-ignore*/}
import Styles from '../../styles/form/Styles'
import ErrorWithDelay from "../../components/forms/ErrorWithDelay";
//@ts-ignore
import Wizard from "../../components/forms/Wizard";
// @ts-ignore
import WizardSignup from "../../components/forms/WizardSignup";

type signupProps = {
    over18: boolean,
firstName: string,
lastName: string,
email: string,
    password: string,
    phone: string,
    services:string[]

}
const initialValues: signupProps = {
    over18: true,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    services: []
}
const Signup = () => {

const [values, setValues] = React.useState<signupProps>(initialValues)
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch( changeTitle('Signup Form'))
    },[])
    const [sent, setSent] = React.useState(false);

    const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async (values: any) => {
        await sleep(300)
        // @ts-ignore
        window.alert(JSON.stringify(values, 0, 2))
    }
    React.useEffect(()=>{
        console.log(values)
    },[values])



    // @ts-ignore
    const Error = ({ name }) => (
        <Field
            name={name}
            subscription={{ touched: true, error: true }}
            render={({ meta: { touched, error } }) =>
                touched && error ? <span>{error}</span> : null
            }
        />
    )


    // @ts-ignore
    // @ts-ignore
    return (
        <LoginContainer>
            <Styles>
                <h1>🏁 Northern Neck Garbage Collection</h1>
                <h2>Signup to Start Service or Rent a dumpster</h2>
                <HomeLink/>

                <WizardSignup
                    initialValues={{  over18:true  }}
                    onSubmit={onSubmit}
                >
                    <Wizard.Page
                        validate={validateSignUp}
                    >
                        <div>
                            <label>Over 18?</label>
                            <Field name="over18" component="input" type="checkbox" />
                        </div>
                        <div>
                            <label>First Name</label>
                            <Field
                                value={values.firstName}
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"


                            />
                            <Error name="firstName" />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <Field
                                value={values.lastName}
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"

                            />
                            <Error name="lastName" />
                        </div>
                    </Wizard.Page>
                    <Wizard.Page
                        validate={validateLogin}
                    >
                        <div>
                            <label>Email</label>
                            <Field
                                value={values.email}
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
                                value={values.password}
                                name="password"
                                component="input"
                                type="password"
                                placeholder="Password"
                            />
                            <Error name="password" />
                        </div>
                    </Wizard.Page>

                    <Wizard.Page
                        validate={validatePhone}
                    >
                        <div>
                            <label>Phone</label>
                            <Field
                                value={values.phone}
                                name="phone"
                                component="input"
                                type="phone"
                                placeholder="Phone Number (xxx-xxx-xxxx)"
                            />
                            <Error name="phone" />
                        </div>
                    </Wizard.Page>

                    <Wizard.Page
                        validate={validateService}
                    >
                            <Typography variant={'subtitle2'} gutterBottom align="center"   >
                                Hold CTRL to select multiple. Press Space bar to choose. Select all that apply
                            </Typography>
                        <div>
                            <label>Services</label>
                            <Field
                                value={values.services}
                                name="services"
                                component="select"
                                multiple style={{
                                 height: '220px',
                                scrollBehavior: 'forced',
                                overflowY: 'scroll',

                            }}>
                                <option value="residentialTrash">🐷 Residential Trash "only"</option>
                                <option value="residentialRecycle">🍄 Residential Recycle "only"</option>
                                <option value="resTrash&Recycle">🧀 Residential Trash and Recycling</option>
                                <option value="resDumpsterRental">🐓 Residential Dumpster Rental</option>
                                <option value="resYardCleanup">🍍 Residential Yard Cleanup</option>
                                <option value="comTrash">🐷 Commercial Trash "only"</option>
                                <option value="comRecycle">🍄 Commercial Recycle "only"</option>
                                <option value="comTrash&Recycle">🧀 Commercial Trash and Recycling</option>
                                <option value="comDumpsterRental">🐓 Commercial Dumpster Rental</option>
                            </Field>
                            <Error name="services" />
                        </div>
                    </Wizard.Page>
                <FormSpy
                    subscription={{ values: true,dirtySinceLastSubmit:true,errors:true }}
                    onChange={ ({ values,dirtySinceLastSubmit,errors }) => {
                        setValues({
                            email: values.email,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            over18: values.over18,
                            password: values.password,
                            phone: values.phone,
                            services: [], ...values})
                       // console.log(values)
                        console.log(dirtySinceLastSubmit)
                        console.log(errors)
                    } }
                >
                    {props=>{
                        console.log(props)
                        return(
                        <>
                        <Wizard.Navigation>
                            <Wizard.Back>
                                <Button variant="contained" color="primary" disabled={props.dirtySinceLastSubmit}>Back</Button>
                            </Wizard.Back>
                            <Wizard.Next>
                                <Button variant="contained" color="primary" disabled={props.dirtySinceLastSubmit}>Next</Button>
                            </Wizard.Next>
                            <Wizard.Submit>
                                <Button variant="contained" color="primary" disabled={props.dirtySinceLastSubmit}>Submit</Button>
                            </Wizard.Submit>
                        </Wizard.Navigation>
                        <Button variant="contained" color="primary" disabled={props.pristine} onClick={()=>props.form.reset()} >Reset</Button>
                        </>
                        )}}
                </FormSpy>
                </WizardSignup>
            </Styles>
        </LoginContainer>
    )
}
export default Signup

