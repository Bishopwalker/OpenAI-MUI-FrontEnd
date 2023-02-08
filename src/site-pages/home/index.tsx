import * as React from "react";
import Appbar from "../../components/appbar";
import SliderComponent from "../../components/slider/SliderComponent";
import Banner from "../../components/banner";

const Home = () => {

    return (
        <div>
            <Appbar/>
            <SliderComponent/>
            <Banner/>

        </div>
    )
}
export default Home