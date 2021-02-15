import styled from 'styled-components';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Email from '../components/email';
import Title from '../components/title';
import Link from 'next/link';
import { HOMEPAGE } from '../data/homepage';

const Main = styled.div`
	padding: 10rem 0rem;
`;

export default function Home({ posts }) {
	console.log(posts.posts);
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
								<Title title="Resources" />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corporis
									sequi suscipit quod, adipisci nam iste labore inventore aut saepe fuga
									repudiandae voluptatum deleniti eligendi ad consectetur, culpa nulla
									numquam.
								</p>
								<Title title="Related Stories" />
								<GS.YPadding />
								{posts.posts.map((post) => {
									return (
										<Stories key={post.id}>
											<div className="photo">
												<img
													src={post.feature_image}
													alt={`From the Ground Up - ${post.title}`}
												/>
											</div>
											<div className="content">
												<div>
													{post.tags.map((tag, index) => {
														return (
															<Link href={`blog/${tag.slug}`} key={tag.id}>
																<a>{tag.name}</a>
															</Link>
														);
													})}{' '}
													| By <strong>{post.authors[0].name}</strong>
												</div>
												<div>
													<h3>{post.excerpt}</h3>
												</div>
											</div>
										</Stories>
									);
								})}
							</GS.MaxContainer>
						</Main>
					</div>
				</GS.ScrollContainer>
			</Layout>
		</>
	);
}

export async function getStaticProps({ context }) {
	async function getAllPosts() {
		try {
			const response = await fetch(
				`${process.env.GHOST_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_KEY}&limit=3&include=authors,tags`
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	const posts = await getAllPosts();

	return {
		props: {
			posts,
		},
	};
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
