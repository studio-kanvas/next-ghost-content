import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: '.env.local.GHOST_URL',
	key: '.env.local.GHOST_KEY',
	version: 'v3',
});
