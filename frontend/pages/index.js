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
import MainContext from '../hooks/context';
import ExcerptContext from '../hooks/excerptContext';
import { useContext } from 'react';

export default function Home({ posts }) {
	console.log(posts);
	const context = useContext(MainContext);
	const excerptContext = useContext(ExcerptContext);
	return (
		<>
			<Layout>
				<GS.ScrollContainer>
					<div className="scroll-child">
						<Hero
							message={HOMEPAGE.first.header}
							description={HOMEPAGE.first.description}
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
							backgroundPosition={HOMEPAGE.second.backgroundPosition}
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
								<Grid content={HOMEPAGE} />
								<Title title="Related Stories" text="Read More" href={`/blog`} />
								<GS.YPadding />
								{posts.map((post) => {
									return (
										<Stories key={post.id}>
											<div className="photo">
												<Link
													href={`/blog/${encodeURIComponent(post.slug)}`}
													key={post.uuid}
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
												<div className="meta">
													By <strong>{post.authors[0].name}</strong> x{' '}
													{context.timeConvert(post.published_at)}
												</div>

												<div>
													<Link
														href={`/blog/${encodeURIComponent(post.slug)}`}
														key={post.excerpt}
													>
														<a>
															<h3>{post.title}</h3>
															<div>
																{post.tags.map((tag) => {
																	return (
																		<Link
																			href={`/blog/${tag.slug}`}
																			key={tag.id}
																		>
																			<a className="tag">{tag.name}</a>
																		</Link>
																	);
																})}{' '}
															</div>
															<p dangerouslySetInnerHTML={{__html: excerptContext.setExcerpt(post.excerpt)}} />
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

const Main = styled.div`
	padding: 10rem 0rem;
`;

const Stories = styled(GS.FlexEven)`
	gap: 2.5rem;
	padding: 1.5rem 0rem;
	align-items: flex-start;
	img {
		opacity: 0.8;
		transition: all 0.25s ease-in-out;
		&:hover {
			opacity: 1;
		}
	}
	@media screen and (max-width: 768px) {
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
		flex: 1.15;
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
		.meta {
			font-size: 1.6rem;
		}
		.tag {
			padding-right: 0.5rem;
			font-family: ${(props) => props.theme.fonts.header};
			font-size: 1.9rem;
			position: relative;
			color: #555;
			&:after {
				content: ' x';
			}
			&:nth-last-child(1)::after {
				content: '';
			}
		}
		.read-more {
			font-family: ${props => props.theme.fonts.header};
			font-size: 1.6rem;
		}
	}
`;
