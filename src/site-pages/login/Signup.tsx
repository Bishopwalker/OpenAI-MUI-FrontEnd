import * as React from "react";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {changeTitle} from "../../redux/pageTitleSlice";
import {LoginContainer, LoginContent} from "../../styles/login";
import {Box, Button, Grid, Typography} from "@mui/material";
import {  Link} from "react-router-dom";
import { Field, Form, FormSpy } from 'react-final-form';
import {ReactNode} from "react";
import {validateLogin, validateService, validateSignUp} from "../../components/forms/validate";
import HomeLink from '../../components/forms/HomeLink'
{/* @ts-ignore*/}
import Styles from '../../styles/form/Styles'
import ErrorWithDelay from "../../components/forms/ErrorWithDelay";
//@ts-ignore
import Wizard from "../../components/forms/Wizard";

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
        window.alert(JSON.stringify(values, 0, 2))
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
                <p>
                    If you Love the Northern Neck, you'll love our service. We are a locally owned business. We are proud supporters of Northern Neck Christian School!
                    If you are a new customer, please fill out the form below to start service. If you are a current customer, please {' '}
                    <code>login</code> to your account.
                </p>
                <div>

                    Things to stop doing:
                    <ul>
                        <li>Loading Wet trash Bags into your car</li>
                        <li>
                            Asking your spouse to take the trash out
                        </li>
                        <li>
                            Leaving trash bags in the driveway for days
                        </li>
                    </ul>

                </div>
                <Wizard
                    initialValues={{  over18:true , service: 'resTrash&Recycle' }}
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
                        validate={validateService}
                    >
                            <Typography variant={'subtitle2'} gutterBottom align="center"   >
                                Hold CTRL to select multiple. Press Space bar to choose. Select all that apply
                            </Typography>
                        <div>
                            <label>Services</label>
                            <Field  name="services" component="select" multiple style={{
                                 height: '220px',
                                scrollBehavior: 'forced',
                                overflow: 'scroll',

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

                </Wizard>
            </Styles>
        </LoginContainer>
    )
}
export default Signup

