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
                    <img src='src/assets/04_16ft_14k_gooseneck_dump.jpg' style={{width: '100vw' , height: '50vh'}} />
                </div>
                <div>
                    <h3>2</h3>
                    <img src='src/assets/maxresdefault.jpg' style={{width: '100vw' , height: '50vh'}} />
                </div>
                <div>
                    <h3>3</h3>
                    <img src='src/assets/NewGooseneckProPactor-500x206.png' style={{width: '100vw' , height: '50vh'}} />
                </div>
                <div>
                    <h3>4</h3>
                    <img src='src/assets/bttw.jpg' style={{width: '100vw' , height: '50vh'}} />

                </div>
                <div>
                    <h3>5</h3>
                    <img src='src/assets/ProPactor_NEW19-1024x471.png' style={{width: '100vw' , height: '50vh'}} />

                </div>

            </Slider>
        </div>
    )
}

// @ts-ignore
export default SliderComponent