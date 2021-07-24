import React from 'react';
import { SliderData } from './SliderData';

const Slider = () => {
	return (
		<>
			{SliderData.map((item, idx) => {
				return item.block;
			})}
		</>
	);
};

export default Slider;
