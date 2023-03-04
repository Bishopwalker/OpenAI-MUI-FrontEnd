import React, {Fragment} from 'react'

const SingleOffer = ({offerImage, offerHeading, offerDescription}) => {
  return (
	<React.Fragment>
		<div class="product-item">
			<div class="pi-pic">
				<img src={offerImage} alt="" />
				<div class="icon">
					<i class="icon_heart_alt"></i>
				</div>
				<ul>
					<li class="w-icon active"><a href="#"><i class="icon_paperclip"></i></a></li>
					<li class="quick-view"><a href="#">View Details</a></li>
				</ul>
			</div>
			<div class="pi-text">
				<a href="#">
					<h5>{offerHeading}</h5>
				</a>
				<br />
				<div>
					<p>{offerDescription}</p>
				</div>
			</div>
		</div>
	</React.Fragment>
  )
}

export default SingleOffer;
