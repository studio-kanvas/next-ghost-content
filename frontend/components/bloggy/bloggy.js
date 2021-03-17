import * as S from './bloggy.styles';
import * as GS from '../../styles/global';
import SidebarMail from '../sidebarmail';
import Link from 'next/link';
import Title from '../title';
import { useContext } from 'react';
import MainContext from '../../hooks/context';

const Bloggy = ({ posts, post, topPosts }) => {
	console.log(topPosts);
	const context = useContext(MainContext);

	return (
		<S.BlogContainer>
			{/* Left Side */}
			<S.BlogArticles>
				{posts &&
					posts.map((post) => {
						return (
							<Link href={`/blog/${encodeURIComponent(post.slug)}`} key={post.excerpt}>
								<a>
									<S.Blog>
										<li>
											<img
												src={post.feature_image}
												alt={`From The Ground Up - ${post.title}`}
											/>
										</li>
										<li className="blog-meta">
											<span>{post.authors[0].name}</span> x Published{' '}
											{context.timeConvert(post.published_at)}
										</li>
										<li>
											<h2>{post.title}</h2>
										</li>
										<li className="tag-li">
											{post.tags.map((tag) => {
												return (
													<Link
														href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
														key={post.excerpt}
													>
														<a className="tag">{tag.name}</a>
													</Link>
												);
											})}
										</li>
										<li>{post.excerpt}</li>
									</S.Blog>
								</a>
							</Link>
						);
					})}
				{post && (
					<S.Article>
						<GS.HeaderText fontSize={'4rem'}>{post.title}</GS.HeaderText>
						<div className="blog-meta">
							<strong>By {post.authors[0].name}</strong> x Published{' '}
							{context.timeConvert(post.published_at)} x{' '}
							{post.tags.map((tag) => {
								return (
									<Link
										href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
										key={post.excerpt}
									>
										<a className="tag">{tag.name}</a>
									</Link>
								);
							})}
						</div>
						<S.Content
							dangerouslySetInnerHTML={{
								__html: post.html,
							}}
						/>
					</S.Article>
				)}
			</S.BlogArticles>

			{/* Right Side */}
			<S.FeaturedArticles>
				<Title title="Top Articles" />
				<S.FlexArticles>
					{posts &&
						posts.map((post) => {
							return (
								<S.TopBlogs key={post.feature_image}>
									<div>
										<Link
											href={`/blog/${encodeURIComponent(post.slug)}`}
											key={post.excerpt}
										>
											<a>
												<img src={post.feature_image} />
											</a>
										</Link>
									</div>
									<div>
										<div className="title">{post.title}</div>
										<ul className="tag">
											{post.tags.map((tag) => {
												return (
													<li key={tag.id}>
														<Link
															href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
															key={post.excerpt}
														>
															<a>{tag.name}</a>
														</Link>
													</li>
												);
											})}
										</ul>
										<div className="created">
											{post.authors[0].name} x {context.timeConvert(post.published_at)}
										</div>
									</div>
								</S.TopBlogs>
							);
						})}
					{topPosts &&
						topPosts.map((post) => {
							return (
								<S.TopBlogs key={post.feature_image}>
									<div>
										<Link
											href={`/blog/${encodeURIComponent(post.slug)}`}
											key={post.excerpt}
										>
											<a>
												<img src={post.feature_image} />
											</a>
										</Link>
									</div>
									<div>
										<div className="title">{post.title}</div>
										<ul className="tag">
											{post.tags.map((tag) => {
												return (
													<li key={tag.id}>
														<Link
															href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
															key={post.excerpt}
														>
															<a>{tag.name}</a>
														</Link>
													</li>
												);
											})}
										</ul>
										<div className="created">
											{post.authors[0].name} x {context.timeConvert(post.published_at)}
										</div>
									</div>
								</S.TopBlogs>
							);
						})}
				</S.FlexArticles>
				<SidebarMail />
			</S.FeaturedArticles>
		</S.BlogContainer>
	);
};

export default Bloggy;
