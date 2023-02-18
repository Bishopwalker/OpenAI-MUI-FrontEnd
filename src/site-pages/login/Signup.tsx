import * as React from "react";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {changeTitle} from "../../redux/pageTitleSlice";
import {LoginContainer, LoginContent} from "../../styles/login";
import {Box, Button, Grid, Typography} from "@mui/material";
import {  Link} from "react-router-dom";
import { Field, Form, FormSpy} from 'react-final-form';
import {ReactNode} from "react";
import {
    validateAddress,
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



const Signup = () => {


    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch( changeTitle('Signup Form'))
    },[])
    const [sent, setSent] = React.useState(false);

    const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async (values: any) => {
        await sleep(300)
        // @ts-ignore
        window.alert("Northern Neck Garbage Thanks you for signing up, Click Log in" +
            JSON.stringify(values, 0, 2))
    }



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

                    <Wizard.Page
                        validate={validatePhone}
                    >
                        <div>
                            <label>Phone</label>
                            <Field
                                name="phone"
                                component="input"
                                type="phone"
                                placeholder="Phone Number (xxx-xxx-xxxx)"
                            />
                            <Error name="phone" />
                        </div>
                    </Wizard.Page>

                    <Wizard.Page
                        validate={validateAddress}
                    >
                        <h3>Address</h3>
                        <div>
                            <label>House Number</label>
                            <Field name="houseNumber"
                                   component="input"
                                   type="number"
                                   placeholder="House Number"
                            />
                            <Error name="houseNumber" />
                        </div>
                        <div>
                            <label>Street</label>
                            <span>ex. Cella Haven lane...</span>
                            <Field

                                name="street"
                                component="input"
                                type="text"
                                placeholder="Street"


                            />
                            <Error name="street" />
                        </div>
                        <div>
                            <label>City</label>
                            <Field

                                name="city"
                                component="input"
                                type="text"
                                placeholder="City"

                            />
                            <Error name="city" />
                        </div>
                        <div>
                            <label>State</label>
                            <Field

                                name="state"
                                component="input"
                                type="text"
                                placeholder="State"
                                maxLength={2}

                            />
                            <Error name="state" />
                        </div>
                        <div>
                            <label>Zip Code</label>
                            <Field

                                name="zip"
                                component="input"
                                type="number"
                                placeholder="Zip Code"
                                maxLength={5}
                            />
                            <Error name="zip" />
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
                        console.log(values)
                        console.log(dirtySinceLastSubmit)
                        console.log(errors)
                    } }
                >

                </FormSpy>
                </WizardSignup>
            </Styles>
        </LoginContainer>
    )
}
export default Signup

