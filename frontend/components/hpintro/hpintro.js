import * as S from './hpintro.styles';
import Image from 'next/image';
import * as GS from '../../styles/global';

const Intro = (props) => {
	return (
		<GS.YPadding>
			<S.HomepageFlex>
				<div className="first-flex">
					<div className="content">
						<div className="box"></div>
						<h2>{props.headline}</h2>
						<p>{props.content}</p>
					</div>
				</div>
				<div>
					<S.Grid>
						<div>
							<Image
								src="/image1.jpg"
								alt="Feng Cha Las Vegas Tea"
								width="100%"
								height="100%"
								layout="responsive"
							/>
						</div>
						<div>
							<Image
								src="/image2.jpg"
								alt="Feng Cha Las Vegas Tea"
								width="100%"
								height="100%"
								layout="responsive"
							/>
						</div>
						<div>
							<Image
								src="/image3.jpg"
								alt="Feng Cha Las Vegas Tea"
								width="100%"
								height="100%"
								layout="responsive"
							/>
						</div>
					</S.Grid>
				</div>
			</S.HomepageFlex>
		</GS.YPadding>
	);
};

export default Intro;
