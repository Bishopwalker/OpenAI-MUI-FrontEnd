import React, {Fragment} from 'react'

const HeaderTop = () => {
  return (
		<React.Fragment>
            <div class="header-top">
                <div class="container">
                    <div class="ht-left">
                        <div class="mail-service">
                            <i class=" fa fa-envelope"></i>
								info@northernneckgarbage.com
                        </div>
                        <div class="phone-service">
                            <i class=" fa fa-phone"></i>
								804-435-1234
                        </div>
                    </div>
                    <div class="ht-right">
                        <a href="#" class="login-panel"><i class="fa fa-user"></i>Login</a>
                        <div class="top-social">
                            <a href="#"><i class="ti-facebook"></i></a>
                            <a href="#"><i class="ti-twitter-alt"></i></a>
                            <a href="#"><i class="ti-linkedin"></i></a>
                            <a href="#"><i class="ti-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
		</React.Fragment>
  )
}

export default HeaderTop

