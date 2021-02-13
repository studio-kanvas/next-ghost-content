import Head from 'next/head';
import styled from 'styled-components';
import { getPosts } from '../lib/ghost';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Email from '../components/email';
import Title from '../components/title';
import { HOMEPAGE } from '../data/homepage';

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
							message={HOMEPAGE.first.header}
							background={HOMEPAGE.first.background}
							link={HOMEPAGE.first.link}
							href={HOMEPAGE.first.href}
							height={HOMEPAGE.first.height}
						/>
					</div>
					<div className="scroll-child">
						<Hero
							message={HOMEPAGE.second.header}
							background={HOMEPAGE.second.background}
							link={HOMEPAGE.second.link}
							href={HOMEPAGE.second.href}
							height={HOMEPAGE.second.height}
						/>
					</div>
					<div className="scroll-child">
						<Email />
					</div>
					<div className="scroll-child">
						<Main>
							<GS.MaxContainer>
								<Title title="Resources" />{' '}
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corporis
									sequi suscipit quod, adipisci nam iste labore inventore aut saepe fuga
									repudiandae voluptatum deleniti eligendi ad consectetur, culpa nulla
									numquam.
								</p>
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
