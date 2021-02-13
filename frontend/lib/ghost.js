import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: process.env.ghost_url,
	key: process.env.ghost_key,
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
			`${process.env.ghost_url}/ghost/api/v3/content/tags/?key=${process.env.ghost_key}`
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
