import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Hero from '../../components/hero';
import Link from 'next/link';
import Grid from '../../components/grid';

const Main = styled.div`
	padding: 10rem 0rem;
`;

export default function Home({ posts }) {
	return (
		<>
			<Layout>
				<Hero
					message={'100M Entrepreneurs'}
					description={
						'Develop entrepreneurship on a global scale and impact underserved communities.'
					}
					background={`url('/ftgu-mission-1m.jpg')`}
					link={'Learn More'}
					href={'/mission/100m'}
					height={'100vh'}
				/>
				<Hero
					message={'Bring Clarity to Business'}
					description={
						'Making it easy to equip entrepreneurs to win through a tailored online approach.'
					}
					background={`url('/ftgu-mission-clarity.jpg')`}
					link={'Coming Soon'}
					height={'100vh'}
				/>
				<Hero
					message={'Changing the Landscape'}
					description={
						'Work with global brands and businesses to change the way entrepreneurs start and grow their brands.'
					}
					background={`url('/ftgu-mission-landscape.jpg')`}
					link={'Coming Soon'}
					height={'100vh'}
				/>
			</Layout>
		</>
	);
}

const Stories = styled(GS.FlexEven)`
	gap: 2.5rem;
	padding: 2rem 0rem;
	.photo {
		flex: 1;
		img {
			width: 100%;
			height: auto;
		}
	}
	.content {
		flex: 2;
		h3 {
			font-size: 2.5rem;
		}
		a {
			color: #000;
			text-decoration: none;
		}
	}
`;

// export async function getStaticProps({ context }) {
// 	async function getAllPosts() {
// 		try {
// 			const response = await fetch(
// 				`${process.env.GHOST_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_KEY}&limit=3&include=authors,tags`
// 			);
// 			const data = await response.json();
// 			return data;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	const posts = await getAllPosts();

// 	return {
// 		props: {
// 			posts,
// 		},
// 	};
// }
