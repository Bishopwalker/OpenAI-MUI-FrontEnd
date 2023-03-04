import React, {Fragment} from 'react'

const HeaderMenu = () => {
  return (
		<React.Fragment>
            <div class="nav-item">
                <div class="container">
                    <nav class="nav-menu mobile-menu">
                        <ul>
                            <li><a href="#">For Home</a>
                                <ul class="dropdown">
                                    <li><a href="#">Learn about Residential Trash Pickup</a></li>
                                    <li><a href="#">Learn about Residential Dumpster Services</a></li>
                                    <li><a href="#">Sign up for Yard Cleanup Services</a></li>
                                </ul>
                            </li>
                            <li><a href="#">For Business</a>
                                <ul class="dropdown">
                                    <li><a href="#">Learn about Commercial Trash Pickup</a></li>
                                    <li><a href="#">Learn about Commercial Dumpster Services</a></li>
                                    <li><a href="#">Sign up for Container Services for Your Business</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Services</a>
                                <ul class="dropdown">
                                    <li><a href="#">Learn about our Junk Cleanup</a></li>
                                    <li><a href="#">Learn about our Contractor Dumpster Services</a></li>
                                    <li><a href="#">Sign up for Services</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">View Schedule</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
		</React.Fragment>
  )
}

export default HeaderMenu

