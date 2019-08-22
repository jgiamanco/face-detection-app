import React from 'react';
import loading from './Loading.svg';

const Loading = () => {
	return (
		<div className="">
			<img style={{paddingTop: '5px'}} src={loading} alt="loading"/>
		</div>
	);
}

export default Loading;