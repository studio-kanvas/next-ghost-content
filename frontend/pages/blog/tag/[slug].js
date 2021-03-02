import Layout from '../../../components/layout/layout';
import { getTags, getAllTags } from '../../../lib/ghost';
import * as GS from '../../../styles/global';
import Hero from '../../../components/hero';
import styled from 'styled-components';
import Link from 'next/link';

export default function Slug({ posts, tags, slug }) {
	const timeConvert = (time) => {
		time = time.slice(0, 10);
		return time;
	};

	//filters through the tags within the posts and returns the value that matches the slug
	const filteredPosts = posts.filter((post) => post.tags.map((tag) => tag.slug).includes(slug));
	return (
		<Layout>
			<Hero message={slug} background={`url('/ftgu-academy-header.jpg')`} />
			<GS.MaxContainer>
				<TagContainer>
					{tags &&
						tags.map((tag) => {
							return (
								<div key={tag.name}>
									<Link href={`/blog/tag/${encodeURIComponent(tag.slug)}`} key={tag.name}>
										<a>{tag.name}</a>
									</Link>
								</div>
							);
						})}
				</TagContainer>
				<Grid>
					{filteredPosts &&
						filteredPosts.map((post) => {
							return (
								<div key={post.title}>
									<Link href={`/blog/${encodeURIComponent(post.slug)}`}>
										<a>
											<img src={post.feature_image} />
											<div className="container">
												<h2>{post.title}</h2>
												{post.tags.map((tag) => {
													return (
														<Link
															href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
															key={tag.id}
														>
															{tag.name}
														</Link>
													);
												})}
											</div>
										</a>
									</Link>
								</div>
							);
						})}
				</Grid>
			</GS.MaxContainer>
		</Layout>
	);
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}

export async function getStaticProps(context) {
	const posts = await getTags();
	const tags = await getAllTags();
	const slug = context.params.slug;

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			posts,
			slug,
			tags: tags.tags,
		},
	};
}

const TagContainer = styled(GS.FlexEven)`
	text-align: center;
	padding: 2.5rem 0rem;
	border-bottom: 0.5rem solid #333;
	div {
		a,
		a:visited {
			font-family: ${(props) => props.theme.fonts.header};
			text-decoration: none;
			color: #333;
			font-size: 2.8rem;
			transition: color 0.25s ease-in-out;
		}
		a:hover {
			color: #000;
		}
	}
`;

const Grid = styled(GS.GridThree)`
	grid-template-columns: repeat(3, 1fr);
	padding: 5rem 0rem;
	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 640px) {
		display: block;
		div {
			margin: 0rem 0rem 3rem 0rem;
		}
	}
	div {
		a {
			text-decoration: none;
			transition: background 0.25s ease-in-out;
			&:hover {
				background: #000;
			}
		}
		img {
			display: block;
			width: 100%;
			height: 26rem;
			object-fit: cover;
			border-left: 0.1rem solid #ccc;
			border-top: 0.1rem solid #ccc;
			border-right: 0.1rem solid #ccc;
			box-sizing: border-box;
		}
		.container {
			padding: 1.5rem 2.5rem;
			border: 0.1rem solid #ccc;
			text-align: left;
			min-height: 15rem;
			h2 {
				color: #000;
				font-size: 2.4rem;
			}
			a {
				padding: 0.75rem;
				background: #222;
				color: #fff;
				margin-right: 0.5rem;
				font-size: 1.2rem;
			}
		}
	}
`;
