import GhostContentAPI from '@tryghost/content-api';
require('dotenv').config();

const api = new GhostContentAPI({
	url: process.env.GHOST_URL,
	key: process.env.GHOST_KEY,
	version: 'v3',
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: 'all',
			include: 'tags,authors',
		})
		.catch((error) => {
			console.error(error);
		});
}

export async function getTags() {
	try {
		const response = await fetch(
			`${process.env.GHOST_URL}/ghost/api/v3/content/tags/?key=${process.env.GHOST_KEY}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getSinglePost(postSlug) {
	return await api.posts
		.read(
			{
				slug: postSlug,
			},
			{
				include: 'tags,authors',
			}
		)
		.catch((err) => console.error(err));
}
