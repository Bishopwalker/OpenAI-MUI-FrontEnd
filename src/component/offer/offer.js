import React, {Fragment} from 'react'
import SingleOffer from './singleOffer';

const Offer = () => {
  return (
	<React.Fragment>
        <section class="man-banner spad">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="filter-control">
                            <ul>
                                <li class="active">Best Cleaning Services</li>
                            </ul>
                        </div>
                        <div class="product-slider owl-carousel">
							<SingleOffer 
								offerImage={"assets/img/nngc-services/1.png"}
								offerHeading={"Residential Trash Pickup"}
								offerDescription={"We offer residential trash pickup for your home. We have a variety of trash cans to choose from."}
							/>
							<SingleOffer 
								offerImage={"assets/img/nngc-services/2.png"}
								offerHeading={"Commercial Trash Pickup"}
								offerDescription={"We offer commercial trash pickup for your business. We have a variety of trash cans to choose from."}
							/>
							<SingleOffer 
								offerImage={"assets/img/nngc-services/3.png"}
								offerHeading={"Recycling Pickup"}
								offerDescription={"We offer recycling pickup for your home or business. We have a variety of trash cans to choose from."}
							/>
							<SingleOffer 
								offerImage={"assets/img/nngc-services/4.png"}
								offerHeading={"Yard Waste Pickup"}
								offerDescription={"We offer yard waste pickup for your home or business. We have a variety of trash cans to choose from."}
							/>
							<SingleOffer 
								offerImage={"assets/img/nngc-services/5.png"}
								offerHeading={"Roll Off Dumpster Rental"}
								offerDescription={"We offer roll off dumpster rental for your home or business. We have a variety of trash cans to choose from."}
							/>
							<SingleOffer 
								offerImage={"assets/img/nngc-services/6.png"}
								offerHeading={"Construction/Commercial Dumpster Rental"}
								offerDescription={"We offer construction/commercial dumpster rental for your home or business. We have a variety of trash cans to choose from."}
							/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</React.Fragment>
  )
}

export default Offer;
