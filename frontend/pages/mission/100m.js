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
					<GS.MaxContainer>
						<Flex>
							<div>
								<h2>YouTube Videos</h2>
							</div>
							<div>
								<h2>Social Media Content</h2>
							</div>
						</Flex>
						<p>
							We serve those who are underserved and don’t have the money or the opportunity to
							travel and learn an industry on their own. We take what we have learned over the
							last decade of doing it, and open the doors for you to absorb that knowledge. Best
							of all, it is free of charge. We only ask that you
						</p>
						<h2>Make An Impact</h2>
						<p>
							Your family, team and community are counting on you to succeed and we ask that you
							pay it forward by building a brand that impacts your world. Share your journey and
							story with us, for a chance to be highlighted in an upcoming series on the
							channel.
						</p>
						<Grid>
							<div>Space</div>
							<div className="content">Content</div>
							<div className="content">Content</div>
							<div>Space</div>
							<div>Space</div>
							<div className="content">Content</div>
							<div className="content">Content</div>
							<div>Space</div>
						</Grid>
						<GS.FlexEven>
							<div>Picture</div>
							<div>
								<h3>Share Your Story and Cause</h3>
								<p>
									We love to hear from you. Tag us in a future post where you declare your
									mission to the world. @johnxsantos
								</p>
							</div>
						</GS.FlexEven>
					</GS.MaxContainer>
				</FullWidth>
			</Layout>
		</>
	);
}

const Grid = styled(GS.GridTwo)`
	grid-template-columns: repeat(2, 1fr);
	margin: 0 auto;
	max-width: 70rem;
	.content {
		border-radius: 1rem;
		border: 0.1rem solid #fff;
		height: 40rem;
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
`;
