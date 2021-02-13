import * as S from './hero.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = ({ message, href, link, arrow, background, height, tags, postAuthor, postTag, createdAt }) => {
	return (
		<S.HeroBackground background={background} height={height}>
			<GS.MaxContainer>
				<S.Message>
					{/* If hero has CTA button */}
					<h1>{message}</h1>
					{href && (
						<Link href={href} passHref>
							<GS.SecondaryButton>{link}</GS.SecondaryButton>
						</Link>
					)}
					{/* General Blog */}
					{message === 'Blog' && (
						<S.Tags>
							{tags &&
								tags.tags.map((tag) => {
									return (
										<li key={tag.slug}>
											<Link href={`/blog/${encodeURIComponent(tag.slug)}`}>
												<a>{tag.slug}</a>
											</Link>
										</li>
									);
								})}
						</S.Tags>
					)}
					{/* Internal Article Page */}
					{postAuthor && (
						<S.SingleArticle>
							<div>By {postAuthor}</div>
							<div>{createdAt}</div>
							<div>
								{postTag.map((tag) => {
									return (
										<Link href={tag.slug} key={tag.id}>
											<a>{tag.name}</a>
										</Link>
									);
								})}
							</div>
						</S.SingleArticle>
					)}
				</S.Message>
				{arrow && (
					<GS.Arrow>
						<IoIosArrowDown />
					</GS.Arrow>
				)}
			</GS.MaxContainer>
		</S.HeroBackground>
	);
};

export default Hero;
