import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Link from 'next/link';

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
				<FullWidth background={'#000'}>
					<Container>
						<Flex>
							<div>
								<h2>YouTube Videos</h2>
							</div>
							<div>
								<h2>Social Media Content</h2>
							</div>
						</Flex>
						<p className="p-padding">
							We serve those who are underserved and don’t have the money or the opportunity to
							travel and learn an industry on their own. We take what we have learned over the
							last decade of doing it, and open the doors for you to absorb that knowledge. Best
							of all, it is free of charge. We only ask that you
						</p>
						<h2>Make An Impact</h2>
						<p className="p-padding">
							Your family, team and community are counting on you to succeed and we ask that you
							pay it forward by building a brand that impacts your world. Share your journey and
							story with us, for a chance to be highlighted in an upcoming series on the
							channel.
						</p>
						<Grid>
							<div>
								<div className="spacer"></div>
								<div className="content idea" />
								<div className="spacer"></div>
								<div className="content flex">
									<div>
										<h3>Development</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, odio.
											Odit, tenetur minus rem aliquam cum unde eveniet eligendi,
											repudiandae quasi similique, quidem numquam impedit nostrum
											voluptate nihil recusandae architecto?
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className="content flex">
									<div>
										<h3>Idea &amp; Concept</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, odio.
											Odit, tenetur minus rem aliquam cum unde eveniet eligendi,
											repudiandae quasi similique, quidem numquam impedit nostrum
											voluptate nihil recusandae architecto?
										</p>
									</div>
								</div>
								<div className="spacer"></div>
								<div className="content dev" />
								<div className="spacer"></div>
							</div>
						</Grid>
						<Flex>
							<div>
								<img src={'/ftgu-tourist.webp'} alt="" className="shadow" />
							</div>
							<div>
								<h3>Share Your Story and Cause</h3>
								<p>
									We love to hear from you. Tag us in a future post where you declare your
									mission to the world. @johnxsantos
								</p>
							</div>
						</Flex>
					</Container>
				</FullWidth>
			</Layout>
		</>
	);
}

const Container = styled(GS.MaxContainer)`
	.p-padding {
		max-width: 65rem;
		margin: 0 auto;
		padding-bottom: 5rem;
	}
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
`;

const Header = styled.div`
	text-align: center;
	padding: 20rem 0rem;
	color: #fff;
	background: url('/ftgu-mission-1m.jpg') no-repeat center;
	background-size: cover;
	p {
		max-width: 75rem;
		margin: 0 auto;
	}
`;

const FullWidth = styled(GS.FullWidth)`
	color: #fff;
	text-align: center;
`;

const Flex = styled(GS.FlexEven)`
	padding: 14rem 0rem;
	.shadow {
		box-shadow: 1rem 1rem 0rem ${(props) => props.theme.colors.primary};
	}
`;
