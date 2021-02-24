import styled from 'styled-components';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Email from '../components/email';
import Title from '../components/title';
import Link from 'next/link';
import Grid from '../components/grid';
import { getPosts } from '../lib/ghost';
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
								<Title title="Resources" />
								<Grid />
								<Title title="Related Stories" text="Read More" href={`/blog`} />
								<GS.YPadding />
								{posts.map((post) => {
									return (
										<Stories key={post.id}>
											<div className="photo">
												<Link
													href={`/blog/${encodeURIComponent(post.slug)}`}
													key={post.excerpt}
												>
													<a>
														<img
															src={post.feature_image}
															alt={`From the Ground Up - ${post.title}`}
														/>
													</a>
												</Link>
											</div>
											<div className="content">
												<div>
													{post.tags.map((tag) => {
														return (
															<Link href={`/blog/${tag.slug}`} key={tag.id}>
																<a>{tag.name}</a>
															</Link>
														);
													})}{' '}
													| By <strong>{post.authors[0].name}</strong>
												</div>
												<div>
													<Link
														href={`/blog/${encodeURIComponent(post.slug)}`}
														key={post.excerpt}
													>
														<a>
															<h3>{post.title}</h3>
															<p>{post.excerpt}</p>
														</a>
													</Link>
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

export async function getStaticProps(context) {
	const posts = await getPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			posts,
		},
	};
}

const Stories = styled(GS.FlexEven)`
	gap: 2.5rem;
	padding: 1.5rem 0rem;
	@media screen and (max-width: 800px) {
		align-items: flex-start;
	}
	@media screen and (max-width: 450px) {
		display: block;
	}
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
			color: #222;
		}
		a {
			color: #000;
			text-decoration: none;
		}
		p {
			margin-top: 0;
			color: #333;
		}
	}
`;
