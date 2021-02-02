import * as S from './hero.styles';
import * as GS from '../../styles/global';

const Hero = () => {
	return (
		<S.HeroBackground>
			<GS.MaxContainer>
				<S.Message>
					<h1>
						We bring clarity to entrepreneurs and equip them to build brands that impact the
						world.
					</h1>
					<GS.MainButton>Learn More</GS.MainButton>
				</S.Message>
			</GS.MaxContainer>
		</S.HeroBackground>
	);
};

export default Hero;
