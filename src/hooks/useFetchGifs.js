import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((gifs) => {
			setTimeout(() => {
				setstate({
					data: gifs,
					loading: false,
				});
			}, 500);
		});
	}, [category]);

	return state; // { data:[], loading: true }
};
