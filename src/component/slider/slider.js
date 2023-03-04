import React, {Fragment} from 'react'
import SingleSlider from './singleSlider';

const Slider = () => {
  return (
	<React.Fragment>
        <section class="hero-section">
            <div class="hero-items owl-carousel">
				<SingleSlider 
					sliderImage={"assets/img/nngc/2.png"}
					sliderText={"Get Your Dumpster Today,"}
					sliderTextSecond={"we do waste."}
				/>
				<SingleSlider 
					sliderImage={"assets/img/nngc/1.png"}
					sliderText={"Do anything but,"}
					sliderTextSecond={"take out the trash."}
				/>
            </div>
        </section>
	</React.Fragment>
  )
}

export default Slider
