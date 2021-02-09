import Head from 'next/head';
import styled from 'styled-components';
import { getPosts } from '../lib/posts';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Email from '../components/email';
import Title from '../components/title';

const Main = styled.div`
	padding: 10rem 0rem;
`;

export default function Home({ posts }) {
	console.log(posts);
	return (
		<>
			<Layout>
				<GS.ScrollContainer>
					<div className="scroll-child">
						<Hero
							message="We bring clarity to entrepreneurs and equip them to build brands that impact the world."
							background={`url('/ftgu-our-goal.jpg')`}
							link="Learn More"
							href="/"
						/>
					</div>
					<div className="scroll-child">
						<Hero
							message="Mission 100M"
							background={`url('/ftgu-mission-1m.jpg')`}
							link="Learn More"
							href="/"
						/>
					</div>
					<div className="scroll-child">
						<Email />
					</div>
					<div className="scroll-child">
						<Main>
							<GS.MaxContainer>
								<Title />
							</GS.MaxContainer>
						</Main>
					</div>
				</GS.ScrollContainer>
			</Layout>
		</>
	);
}

export async function getStaticProps(context) {
	const posts = await getPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
	};
}
