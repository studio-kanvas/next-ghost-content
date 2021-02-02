import Head from 'next/head';
import { getPosts } from '../lib/posts';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';

export default function Home({ posts }) {
	return (
		<>
			<Layout>
				<GS.MaxContainer>
					<h1>H1</h1>
					<h2>H2</h2>
					<h3>H3</h3>
					<h4>H4</h4>
					<h5>H5</h5>
					<p>
						Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat sequi,
						labore reprehenderit aspernatur quod saepe excepturi impedit praesentium dignissimos
						cum, tempore ratione omnis? Sed maiores atque sit esse deserunt.{' '}
						<a href="#">Click here for more info</a>
					</p>
					<ul>{/* {posts.map((post) => (
							<li key={post.id}>{post.title}</li>
						))} */}</ul>
					<GS.MainButton href="#">Click Here</GS.MainButton>
					<GS.FlexEven>
						<div>Left 50%</div>
						<div>Right 50%</div>
					</GS.FlexEven>
					<GS.FlexOneThree>
						<div>Left 25%</div>
						<div>Right 75%</div>
					</GS.FlexOneThree>
					<GS.FlexThreeOne>
						<div>Left 25%</div>
						<div>Right 75%</div>
					</GS.FlexThreeOne>
					<GS.GridThree>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
					</GS.GridThree>
					<GS.GridTwo>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
						<div>Hello</div>
					</GS.GridTwo>
				</GS.MaxContainer>
			</Layout>
		</>
	);
}

// export async function getStaticProps(context) {
// 	const posts = await getPosts();

// 	if (!posts) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	return {
// 		props: { posts },
// 	};
// }
