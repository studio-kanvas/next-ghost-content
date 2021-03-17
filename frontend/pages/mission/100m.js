import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { GiNetworkBars } from 'react-icons/gi';
import { BiCheck } from 'react-icons/bi';

const Main = styled.div`
	padding: 10rem 0rem;
`;

export default function Home({ posts }) {
	return (
		<>
			<Layout>
				<Header>
					<GS.MaxContainer>
						<h1>100M Entrepreneurs</h1>
						<p>
							Entrepreneurs are agents of change, and we are here to give them a platform to
							win. 100M is a big goal, but the most important measure of success will be the
							change we see in individuals who take action after watching.
						</p>
						<p>
							We began this mission in 2014 and it is growing every day. To reach this goal we
							will focus on 2 things:
						</p>
					</GS.MaxContainer>
				</Header>
				<FullWidth className="youtube-social">
					<Container>
						<Flex>
							<Fade top cascade>
								<div>
									<h2>YouTube Videos</h2>
								</div>
								<div>
									<h2>Social Media Content</h2>
								</div>
							</Fade>
						</Flex>
					</Container>
				</FullWidth>
				<FullWidth background={'#000'}>
					<Container>
						<p className="p-padding p-top">
							We serve those who are underserved and don’t have the money or the opportunity to
							travel and learn an industry on their own. We take what we have learned over the
							last decade of doing it, and open the doors for you to absorb that knowledge. Best
							of all, it is free of charge. We only ask that you:
						</p>
						<h2>Make An Impact</h2>
						<p>
							Your family, team and community are counting on you to succeed and we ask that you
							pay it forward by building a brand that impacts your world. Share your journey and
							story with us, for a chance to be highlighted in an upcoming series on the
							channel.
						</p>
						<GS.YPadding />
						<Grid>
							<Fade top cascade>
								<div>
									<div className="spacer"></div>
									<div className="content idea" />
									<div className="spacer"></div>
									<div className="content flex">
										<div>
											<BiCheck />
											<h3>BE THE CHANGE</h3>
											<p>
												We ask that you pay it forward by building a brand that
												positively impacts your community.
											</p>
										</div>
									</div>
								</div>
								<div>
									<div className="content flex">
										<div>
											<GiNetworkBars />
											<h3>TAKE ACTION</h3>
											<p>
												Your family, team and community are counting on you to succeed
												and the journey begins by getting started.
											</p>
										</div>
									</div>
									<div className="spacer"></div>
									<div className="content dev" />
									<div className="spacer"></div>
								</div>
							</Fade>
						</Grid>
						<Flex>
							<Fade cascade>
								<div>
									<img src={'/ftgu-tourist.webp'} alt="" className="shadow" />
								</div>
								<div>
									<h3>Share Your Story and Cause</h3>
									<p>
										Share your journey and story with us for a chance to be highlighted in
										future content. Take it a step further and tag us in a post where you
										declare your brand's mission to the world! @johnxsantos
									</p>
								</div>
							</Fade>
						</Flex>
					</Container>
				</FullWidth>
			</Layout>
		</>
	);
}

const Container = styled(GS.MaxContainer)`
	.p-top {
		position: relative;
		top: -5rem;
	}
	h2 {
		padding-bottom: 4.5rem;
	}
	p {
		max-width: 55rem;
		margin: 0 auto;
	}
`;

const Paragraph = styled.p`
	max-width: 50rem;
	margin: 0 auto;
`;

const Grid = styled(GS.FlexEven)`
	display: flex;
	flex-direction: flex-start;
	gap: 2rem;
	margin: 0 auto;
	max-width: 70rem;
	.spacer {
		height: 2rem;
	}
	.content {
		border-radius: 1rem;
		border: 0.1rem solid #fff;
		height: 40rem;
		svg {
			width: 6rem;
			height: 6rem;
		}
	}
	.flex {
		display: flex;
		padding: 2rem;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}
	.idea {
		background: url('/ftgu-idea.webp') no-repeat top center;
		background-position: 50% 30%;
		background-size: 150% 150%;
		width: 100%;
	}
	.dev {
		background: url('/ftgu-development.webp') no-repeat top center;
		background-position: 50% 40%;
		background-size: 150% 150%;
		width: 100%;
	}
	@media screen and (max-width: 800px) {
		display: block;
		.idea,
		.dev {
			display: none;
		}
		.content {
			margin-bottom: 2.5rem;
		}
	}
`;

const Header = styled.div`
	text-align: center;
	padding: 20rem 0rem;
	color: #fff;
	background: url('/ftgu-100m.webp') no-repeat center;
	background-size: cover;
	p {
		max-width: 60rem;
		margin: 0 auto;
	}
`;

const FullWidth = styled(GS.FullWidth)`
	color: #fff;
	background: #000;
	text-align: center;
	&.youtube-social {
		background: url('/ftgu-youtube-social.webp') no-repeat center;
		background-size: cover;
	}
`;

const Flex = styled(GS.FlexEven)`
	padding: 14rem 0rem;
	.shadow {
		box-shadow: 1rem 1rem 0rem ${(props) => props.theme.colors.primary};
	}
	@media screen and (max-width: 850px) {
		display: block;
		h3 {
			margin: 2.5rem 0rem;
		}
		p {
			max-width: 50rem;
			margin: 0 auto;
		}
		img {
			margin: 0 auto;
			width: 60%;
		}
	}
`;
