import * as S from './hero.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = ({ message, href, link, arrow, background, height, tags }) => {
	return (
		<S.HeroBackground background={background} height={height}>
			<GS.MaxContainer>
				<S.Message>
					<h1>{message}</h1>
					{href && (
						<Link href={href} passHref>
							<GS.SecondaryButton>{link}</GS.SecondaryButton>
						</Link>
					)}
					{message === 'Blog' && (
						<S.Tags>
							{tags.tags.map((tag) => {
								return (
									<li key={tag.slug}>
										<Link href={tag.slug}>
											<a>{tag.slug}</a>
										</Link>
									</li>
								);
							})}
						</S.Tags>
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
