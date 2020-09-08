export const getGifs = async (category) => {
	//  Get the data
	const url = 'https://api.giphy.com/v1/gifs/search?api_key=pnnOp1vpp4itiK7ZlbMXyVxV1t4I81JJ&q=' + encodeURI(category) + '&limit=10';
	const resp = await fetch(url);
	const { data } = await resp.json();

	//  Get the important things of the request
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
};
