import GhostContentAPI from '@tryghost/content-api';
require('dotenv').config();

const api = new GhostContentAPI({
	url: '.env.local.GHOST_URL',
	key: '.env.local.GHOST_KEY',
	version: 'v3',
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: 'all',
		})
		.catch((err) => {
			console.error(err);
		});
}
