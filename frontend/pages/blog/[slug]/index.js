import Layout from '../../../components/layout/layout';
import { getAuthor, getSinglePost } from '../../../lib/ghost';
import Hero from '../../../components/hero';
import Bloggy from '../../../components/bloggy';
import * as GS from '../../../styles/global';

export default function Slug({ post }) {
	console.log(post);

	const timeConvert = (time) => {
		time = time.slice(0, 10);
		return time;
	};

	return (
		<Layout>
			<Hero
				message={post.title}
				background={`url('/ftgu-academy-header.jpg')`}
				postTag={post.tags}
				postAuthor={post.authors[0].name}
				createdAt={timeConvert(post.created_at)}
			/>
			<GS.MaxContainer>
				<Bloggy post={post} />
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
	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: { post },
	};
}
