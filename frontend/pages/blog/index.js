import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Hero from '../../components/hero';
import Title from '../../components/title';
import Bloggy from '../../components/bloggy';
import { getPosts } from '../../lib/ghost';
import Link from 'next/link';

export default function Blog({ posts }) {
	return (
		<Layout>
			<Hero message="Blog" background={`url('/ftgu-academy-header.jpg')`} tags={posts.tags} />
			<GS.MaxContainer>
				<GS.YCPadding padding={'5rem'}>
					<Title title="The Latest" />
					<Bloggy posts={posts} />
					<Pagination>
						<div className="next">Next</div>
						{/* <div className="pages">
							Current: {pagination.page} Total: {pagination.pages}
						</div> */}
						<div className="prev">Prev</div>
					</Pagination>
				</GS.YCPadding>
			</GS.MaxContainer>
		</Layout>
	);
}

export async function getStaticProps({ context }) {
	const posts = await getPosts();

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
