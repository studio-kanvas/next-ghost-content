import * as S from './hero.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import MainContext from '../../hooks/context';
import { useContext } from 'react';

const Hero = ({
	message,
	description,
	href,
	link,
	background,
	height,
	tags,
	postAuthor,
	postTag,
	createdAt,
	darken,
	backgroundPosition,
}) => {
	const context = useContext(MainContext);
	return (
		<S.HeroBackground
			background={background}
			height={height}
			backgroundPosition={backgroundPosition}
			className={darken}
		>
			<GS.MaxContainer>
				<S.Message>
					<Fade top cascade>
						<div>
							<div>
								<h1>{message}</h1>
							</div>
							{description && <S.Description>{description}</S.Description>}
							{link && (
								<div>
									<Link href={href ? href : ''} passHref>
										<GS.SecondaryButton>{link}</GS.SecondaryButton>
									</Link>
								</div>
							)}
						</div>
					</Fade>
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
							<div className="author">By {postAuthor}</div>
							<div>{context.timeConvert(createdAt)}</div>
							<div>
								{postTag.map((tag) => {
									return (
										// <Link href={tag.slug} key={tag.id}>
										// 	<a>{tag.name}</a>
										// </Link>
										<Link
											href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
											key={tag.slug}
										>
											<a>{tag.name}</a>
										</Link>
									);
								})}
							</div>
						</S.SingleArticle>
					)}
				</S.Message>
			</GS.MaxContainer>
		</S.HeroBackground>
	);
};

export default Hero;
