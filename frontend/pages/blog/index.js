import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Hero from '../../components/hero';
import { getAllPosts } from '../../lib/ghost';
import Title from '../../components/title';
import Bloggy from '../../components/bloggy';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

let page = 1;

export default function Blog({ posts }) {
	const pagination = posts.meta.pagination;
	const router = useRouter();
	console.log(pagination);
	return (
		<>
			<Layout>
				<Hero message="Blog" background={`url('/ftgu-academy-header.jpg')`} tags={posts.tags} />
				<GS.MaxContainer>
					<GS.YCPadding padding={'5rem'}>
						<Title title="The Latest" />
						<Bloggy posts={posts.posts} />
						<Pagination>
							<div className="next">
								{page != 1 && (
									<Link href={`/blog/pages/${page - 1}`}>
										<a>Next {pagination.next}</a>
									</Link>
								)}
							</div>
							<div className="pages">
								Current: {pagination.page} Total: {pagination.pages}
							</div>
							<div className="prev">
								<Link href={`/blog/pages/${page + 1}`}>
									<a>Prev {pagination.prev}</a>
								</Link>
							</div>
						</Pagination>
					</GS.YCPadding>
				</GS.MaxContainer>
			</Layout>
		</>
	);
}

export async function getStaticProps({ context }) {
	async function getAllPosts() {
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

	const posts = await getAllPosts();

	return {
		props: {
			posts,
		},
	};
}

const Pagination = styled(GS.FlexEven)`
	.next,
	.prev {
		flex: 1;
	}
	.prev {
		text-align: right;
	}
	.pages {
		flex: 3;
		text-align: center;
	}
`;
