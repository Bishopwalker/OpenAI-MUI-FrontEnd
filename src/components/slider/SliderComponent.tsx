import * as React from "react";
// @ts-ignore
import Slider from 'react-slick'

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div>
            <Slider {...settings}>

                <div>
                    <h3>1</h3>
                    <img src='src/assets/compactor_image.jpeg' style={{width: '100vw' , height: '50vh'}} />
                </div>
                <div>
                    <h3>2</h3>
                    <img src='src/assets/compactor_image.jpeg' style={{width: '100vw' , height: '50vh'}} />
                </div>
                <div>
                    <h3>3</h3>
                    <img src='src/assets/compactor_image.jpeg' style={{width: '100vw' , height: '50vh'}} />
                </div>
                <div>
                    <h3>4</h3>
                    <img src='src/assets/compactor_image.jpeg' style={{width: '100vw' , height: '50vh'}} />

                </div>
                <div>
                    <h3>5</h3>
                    <img src='src/assets/compactor_image.jpeg' style={{width: '100vw' , height: '50vh'}} />

                </div>
                <div>
                    <h3>6</h3>
                    <img src='src/assets/compactor_image.jpeg' style={{width: '100vw' , height: '50vh'}} />

                </div>
            </Slider>
        </div>
    )
}

export default SliderComponent