import Layout from '../../../components/layout/layout';
import { getPosts, getSinglePost } from '../../../lib/ghost';
import Hero from '../../../components/hero';
import Bloggy from '../../../components/bloggy';
import * as GS from '../../../styles/global';

export default function Slug({ post, posts }) {
	const timeConvert = (time) => {
		time = time.slice(0, 10);
		return time;
	};

	return (
		<Layout>
			<Hero
				message={post.title}
				background={`url('${post.feature_image}')`}
				postTag={post.tags}
				postAuthor={post.authors[0].name}
				createdAt={timeConvert(post.created_at)}
				darken={'darken'}
			/>
			<GS.MaxContainer>
				<Bloggy post={post} topPosts={posts} />
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
	const post = await getSinglePost(context.params.slug);
	const posts = await getPosts();

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: { post, posts },
	};
}
