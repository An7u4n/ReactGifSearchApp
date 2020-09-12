import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	//	Create categories
	const [categories, setCategories] = useState(['South Park']);

	// const handleAdd = () => {
	// 	setCategories((cats) => [...cats, 'Mamichula']);
	// };

	return (
		<>
			<h2>Miguel Gif Searcher</h2>
			<AddCategory setCategories={setCategories} categories={categories} />
			<hr />

			{/* Print Categories */}
			<div>
				{/* hago un bucle y seteo cada category por interaccion */}
				{categories.map((category) => (
					// por cada category creo un componente y le mando la key y la category
					<GifGrid key={category} category={category} />
				))}
			</div>
		</>
	);
};

export default GifExpertApp;
