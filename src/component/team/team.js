import React, {Fragment} from 'react'
import Heading from './heading';

const Team = () => {
  return (
	<React.Fragment>
        <section class="latest-blog spad">
            <div class="container">
				<Heading />
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-latest-blog">
                            <img src="assets/img/nngc-team/1.png" alt="" />
                            <div class="latest-text">
                                <a href="#">
                                    <h4>Bishop Walker</h4>
                                </a>
                                <p>Owner/CEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-latest-blog">
                            <img src="assets/img/nngc-team/2.png" alt="" />
                            <div class="latest-text">
                                <a href="#">
                                    <h4>Chase Honaker</h4>
                                </a>
                                <p>Chief Operations Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</React.Fragment>
  )
}

export default Team;
