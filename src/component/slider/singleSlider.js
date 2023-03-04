import React, {Fragment} from 'react'

const SingleSlider = ({sliderImage, sliderText, sliderTextSecond}) => {
  return (
		<React.Fragment>
                <div class="single-hero-items set-bg" data-setbg={sliderImage}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 style={{color: '#FFF'}}>{sliderText}</h1>
                                <h1 style={{color: '#FFF'}}>{sliderTextSecond}</h1>
								<br />
								<br />
                                <a href="#" class="primary-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
		</React.Fragment>
  )
}

export default SingleSlider
