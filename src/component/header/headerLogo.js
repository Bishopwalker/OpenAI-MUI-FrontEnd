import React, {Fragment} from 'react'

const HeaderLogo = () => {
  return (
		<React.Fragment>
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="#">
                            		<img src="assets/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7">
                            <div class="advanced-search">
                                <button type="button" class="category-btn">All Categories</button>
                                <div class="input-group">
                                    <input type="text" placeholder="" />
                                    <button type="button"><i class="ti-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-right col-md-3" style={{visibility: 'visible'}}>
                            <ul class="nav-right">
                                <li class="">
                                    <a href="#">
                                        <span style={{color: '#000', fontSize: '16px', textDecoration: 'underline'}}>Support NNK Christian School</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
		</React.Fragment>
  )
}

export default HeaderLogo

