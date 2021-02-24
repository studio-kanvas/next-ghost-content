import styled from 'styled-components';
import Layout from '../../../components/layout/layout';
import * as GS from '../../../styles/global';
import Hero from '../../../components/hero';
import Title from '../../../components/title';
import Bloggy from '../../../components/bloggy';
import { getPosts, getAllPosts } from '../../../lib/ghost';
import Link from 'next/link';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useRouter } from 'next/router';

export default function Blog({ posts, pagination }) {
	const router = useRouter();
	console.log(pagination);
	return (
		<Layout>
			<Hero message="Blog" background={`url('/ftgu-academy-header.jpg')`} tags={posts.tags} />
			<GS.MaxContainer>
				<GS.YCPadding padding={'5rem'}>
					<Title title="The Latest" />
					<Bloggy posts={posts} />
					<GS.Pagination>
						{pagination.prev != null ? (
							<div
								className="next"
								onClick={() => router.push(`/blog/page/${pagination.prev}`)}
							>
								<span>
									<BiLeftArrow /> Next
								</span>
							</div>
						) : (
							<div />
						)}
						<div className="pages">{pagination.page}</div>
						{pagination.next != null ? (
							<div
								className="prev"
								onClick={() => router.push(`/blog/page/${pagination.next}`)}
							>
								<span>
									Prev <BiRightArrow />
								</span>
							</div>
						) : (
							<div />
						)}
					</GS.Pagination>
				</GS.YCPadding>
			</GS.MaxContainer>
		</Layout>
	);
}

export const getServerSideProps = async (context) => {
	const posts = await getAllPosts(context.params.page);
	return {
		props: {
			posts: posts.posts,
			pagination: posts.meta.pagination,
		},
	};
};
