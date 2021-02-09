import * as S from './hero.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = ({ message, href, link, background }) => {
	return (
		<S.HeroBackground background={background}>
			<GS.MaxContainer>
				<S.Message>
					<h1>{message}</h1>
					{href && (
						<Link href={href}>
							<a>
								<GS.SecondaryButton>{link}</GS.SecondaryButton>
							</a>
						</Link>
					)}
				</S.Message>
				<GS.Arrow>
					<IoIosArrowDown />
				</GS.Arrow>
			</GS.MaxContainer>
		</S.HeroBackground>
	);
};

export default Hero;
