import React, {Fragment} from 'react'
import Heading from './heading';

const About = () => {
  return (
	<React.Fragment>
        <section class="latest-blog spad">
            <div class="container">
				<Heading />
                <div class="row">
                </div>
                <div class="benefit-items">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="single-benefit">
                                <div class="sb-icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                </div>
                                <div class="sb-text">
                                    <h6>FLEXIBLE CLEANING PLANS</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-benefit">
                                <div class="sb-icon">
                                    <img src="assets/img/icon-2.png" alt="" />
                                </div>
                                <div class="sb-text">
                                    <h6>GREEN CLEANING SOLUTIONS</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-benefit">
                                <div class="sb-icon">
                                    <img src="assets/img/icon-1.png" alt="" />
                                </div>
                                <div class="sb-text">
                                    <h6>BEST CUSTOMER SUPPORT</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</React.Fragment>
  )
}

export default About;
