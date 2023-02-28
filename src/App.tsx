import './App.css'
 import * as React from "react";
import {Button, Container, ThemeProvider} from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import {Provider} from "react-redux";
import store from './redux/store.js';
import SliderComponent from "./components/slider/SliderComponent";
import Banner from "./components/banner";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./site-pages/landing";
import AIHome from "./components/OpenAI_components/AIHome";
import Footer from "./components/footer";
import Business from "./site-pages/business";
import Services from "./site-pages/services";
import Residential from "./site-pages/home/Residential";
import Dumpster from "./site-pages/dumpster";
import Recycling from "./site-pages/recycling";
import YardWaste from "./site-pages/yard-waste";
import Construction from "./site-pages/construction";
import AppointmentPickerEl from "./components/appointment";
import Landing from "./site-pages/landing";
import Bill from "./site-pages/bill";
// @ts-ignore
import ClassAppointments from "./components/appointment/ClassAppointments.jsx";
import Login from "./site-pages/login/Login";
import Signup from "./site-pages/login/Signup";
import {useAppSelector} from "./redux/hooks/hooks";
import {useLocation} from "react-router-dom";
import {changeUserLogInfo} from "./redux/userLogInfoSlice";

function App() {
    const screenTitle = useAppSelector(state => state.title)
    const userInfo = useAppSelector(state => state.userInfo.userLogInfo)

    console.log(screenTitle)
    React.useEffect(() => {

        document.title = screenTitle.title? screenTitle.title : 'NNGC'
    }, [screenTitle])

    const location = useLocation();
console.log(userInfo)
//create a function that will selection an item from the array of items
    return (

<>
                {location.pathname== '/login' || location.pathname=='/signup'? <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/signup'} element={<Signup/>}/>
                </Routes>
                    :
                    <ThemeProvider theme={theme}>
                    <Container
                        maxWidth={'xl'}
                        sx={{
                            background: '#fff',
                            fontColor: 'black',
                            height: '100%',
                            width: '100%',
                        }}

                    >
                        <Appbar/>

                        {/*     Appbar
Banner
Promotions
title
Services
footer
searchBox
appDrawer
*/}
                        {/*<Home/>*/}
                        <Routes>
                            <Route path={'/'} element={<Landing/>}/>
                            <Route path={'/business'} element={<Business/>}/>
                            <Route path={'/residential_t'} element={<Residential/>}/>
                            <Route path={'/services'} element={<Services/>}/>
                            <Route path={'/dumpster'} element={<Dumpster/>}/>
                            <Route path={'/recycling'} element={<Recycling/>}/>
                            <Route path={'/yardwaste'} element={<YardWaste/>}/>
                            <Route path={'/construction/*'} element={<Construction/>}/>
                            <Route path={'/donations'} element={<AppointmentPickerEl/>}/>
                            <Route path={'/appointments'} element={<ClassAppointments/>}/>
                            <Route path={'/bill'} element={<Bill/>}/>
                        </Routes>
                        <Footer/>
                    </Container>

                </ThemeProvider>
                }
              </>

    )
}
export default App;
