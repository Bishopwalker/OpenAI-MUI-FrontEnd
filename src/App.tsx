import './App.css'
 import * as React from "react";
import {Button, Container, ThemeProvider} from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import {Provider} from "react-redux";
import store from './redux/store.js';
import SliderComponent from "./components/slider/SliderComponent";

function App() {

    React.useEffect(() => {
        document.title = "NNGC Landing Page"
    }, [])

//create a function that will selection an item from the array of items
    return (
        <Provider store={store}>
        <ThemeProvider theme={theme}>
     <Container
            maxWidth={'xl'}
            sx={{
                background: '#fff',

               fontColor: 'black'

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

            <SliderComponent/>
     </Container>
        </ThemeProvider>
        </Provider>
    )
}
export default App;
