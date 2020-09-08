import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	//  Esto hace que solo se renderice una sola vez

	// useEffect(() => {
	//Como getGifs() es asyncrono retorna una promesa y
	//para llamar a la funcion set images deberiamos hacerlos de
	//estas maneras

	// getGifs(category).then((gifs) => setimages(gifs));
	// 	getGifs(category).then(setimages);
	// }, [category]);

	//	Pongo category aca para eliminar un warning
	//  Lo que hace es que cuando category cambia se ejecuta el codigo

	//  Creo una funcion asincrona

	return (
		<>
			<h3 className="category-title">{category}</h3>

			{loading && <p>Loading</p>}

			<div className="card-grid animate__animated animate__delay-1s animate__backInDown">
				{images.map((image) => (
					<GifGridItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
