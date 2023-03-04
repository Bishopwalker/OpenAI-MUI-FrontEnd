import React, {Fragment} from 'react'

const Footer = () => {
  return (
	<React.Fragment>
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer-left">
                            <div class="footer-logo">
                                <a href="#">
									NNGC
								</a>
                            </div>
                            <ul>
                                <li>Address: 164 Cellar Haven Ln, Lottsburg, VA 22511
                                 </li>
                                <li>Phone: 804-435-1234 (24/7 Support Line) </li>
                                <li>Email: info@northernneckgarbage.com</li>
                            </ul>
                            <div class="footer-social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="footer-widget">
                            <h5>Our Services</h5>
                            <ul>
                                <li><a href="#">Residential Trash Pickup</a></li>
                                <li><a href="#">Commercial Trash Pickup</a></li>
                                <li><a href="#">Recycling Pickup</a></li>
                                <li><a href="#">Yard Waste Pickup</a></li>
                                <li><a href="#">Roll Off Dumpster Rental</a></li>
                                <li><a href="#">Commercial Dumpster Rental</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="newslatter-item">
                            <h5>Join Our Newsletter Now</h5>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#" class="subscribe-form">
                                <input type="text" placeholder="Enter Your Mail" />
                                <button type="button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-reserved">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copyright-text">
                               
    Copyright &copy; 2023. All rights reserved.
   
                            </div>
                            <div class="payment-pic">
								<p>We are Northumberland's #1 choice for trash removal!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	</React.Fragment>
  )
}

export default Footer;
