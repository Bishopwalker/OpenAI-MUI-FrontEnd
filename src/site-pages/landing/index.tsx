import * as React from "react";
import Appbar from "../../components/appbar";
import SliderComponent from "../../components/slider/SliderComponent";
import Banner from "../../components/banner";
import {useAppDispatch,useAppSelector} from "../../redux/hooks/hooks";

const Landing = () => {
    const dispatch = useAppDispatch()
    const screenTitle = useAppSelector(state => state.title)

    return (
        <div>

            <SliderComponent/>
            <Banner/>

        </div>
    )
}
export default Landing