import React from 'react';

import './styles.sass';

const BasketIcon = () => {
	return (
		<svg className="basket-icon" version="1.1" x="0px" y="0px"
			width="512px" height="512px" viewBox="0 0 512 512">
			<g>
				<g>
					<path className="basket-icon__fill" d="M420.25,64l54.844,384H36.875L91.75,64H420.25 M448,32H64L0,480h512L448,32L448,32z"/>
					<path className="basket-icon__fill" d="M384,128c0-17.688-14.312-32-32-32s-32,14.313-32,32c0,10.938,5.844,20.125,14.25,25.906
						C326.5,211.375,293.844,256,256,256c-37.813,0-70.5-44.625-78.25-102.094C186.156,148.125,192,138.938,192,128
						c0-17.688-14.313-32-32-32s-32,14.313-32,32c0,12.563,7.438,23.188,17.938,28.406C155.125,232.063,200.031,288,256,288
						s100.875-55.938,110.062-131.594C376.594,151.188,384,140.563,384,128z"/>
				</g>
			</g>
		</svg>
	);
}

export default BasketIcon;