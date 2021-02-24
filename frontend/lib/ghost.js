import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: process.env.GHOST_URL,
	key: process.env.GHOST_KEY,
	version: 'v3',
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: '5',
			include: 'tags,authors',
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function getAllPosts(page) {
	try {
		const response = await fetch(
			`${process.env.GHOST_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_KEY}&limit=5&include=authors,tags&page=${page}`
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

// export async function getTags() {
// 	try {
// 		const response = await fetch(
// 			`${process.env.GHOST_URL}/ghost/api/v3/content/tags/?key=${process.env.GHOST_KEY}`
// 		);
// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export async function getPages() {
// 	return await api.pages
// 		.browse({
// 			limit: 'all',
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});
// }
