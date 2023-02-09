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
import Home from "./site-pages/home";
import AIHome from "./components/OpenAI_components/AIHome";
import Footer from "./components/footer";

function App() {

    React.useEffect(() => {
        document.title = "NNGC Landing Page"
    }, [])

//create a function that will selection an item from the array of items
    return (
        <Provider store={store}>
            <BrowserRouter>
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
        <Route path='/' element={<Home/>}/>
         <Route path={'/signUp'} element={<Home/>}/>
        <Route path={'/residential_t'} element={<AIHome/>}/>
         </Routes>
         <Footer/>
     </Container>

        </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}
export default App;
