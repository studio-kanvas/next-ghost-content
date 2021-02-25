import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Link from 'next/link';
import Grid from '../../components/grid';
import Fade from 'react-reveal/Fade';
import { LANDSCAPE } from '../../data/landscape';

const Main = styled.div`
	padding: 10rem 0rem;
`;

export default function Landscape({ content }) {
	return (
		<>
			<Layout>
				<Header>
					<GS.MaxContainer>
						<Fade top cascade>
							<div>
								<h1>Who We Serve</h1>
								<p>
									We serve a community of 300,000+ entrepreneurs who are passionate,
									dedicated and willing to expand their earning potential through starting
									businesses. Located in major cities all over the world. LA, NY, Miami and
									Houston Texas, in addition to globally in growing markets like India and
									South Africa. Our content is created for entrepreneurs and used by
									entrepreneurs globally.
								</p>
							</div>
						</Fade>
					</GS.MaxContainer>
				</Header>
				<FullWidth>
					<Container>
						<Fade top cascade>
							<div>
								<h2 className="p-top">Let's Work Together To Breakthrough The Noise</h2>
								<p className="p-padding p-top">
									We are selective about the brands and businesses we partner with. Our goal
									is to provide value that will bring clarity to business and help our
									community make an impact in their lives and community.
								</p>
								<p className="p-padding">
									We serve the marginalized community of entrepreneurs who are frequently
									forgotten, and it has become a force of change over the last few years.
								</p>
								<p className="p-padding">
									If you're a company that is willing to share your business operations,
									products or services and can give before asking. Here’s how we can work:
								</p>
							</div>
						</Fade>
						<GS.XCPadding padding={'5rem'}>
							<Grid content={LANDSCAPE} />
						</GS.XCPadding>
						<GS.YPadding>
							<WorkTogether>
								<div>
									<Photo src={'/ftgu-academy-whats-included-700x1000.jpg'} />
								</div>
								<div>
									<Fade top>
										<h2>What's Included</h2>
									</Fade>
									<List>
										<Fade top cascade>
											<li>Service businesses</li>
											<li>Online Tools</li>
											<li>Design Programs</li>
											<li>eCommerce Tools</li>
											<li>Logistics</li>
											<li>Manufacturers</li>
											<li>Equipment</li>
										</Fade>
									</List>
								</div>
							</WorkTogether>
						</GS.YPadding>
						<GS.YCPadding padding={'10rem'}>
							<h2>Let's Get It</h2>
							<p className="p-padding p-top">
								If this mission and community aligns with your business. Contact us to learn
								more about sponsoring and working together. We have a variety of options
								available to fit your needs.
							</p>
							<Fade>
								<Link href="mailto:support@fromthegroundup.io" passHref>
									<GS.MainButton>Get Started</GS.MainButton>
								</Link>
							</Fade>
						</GS.YCPadding>
					</Container>
				</FullWidth>
			</Layout>
		</>
	);
}

const Container = styled(GS.MaxContainer)`
	.p-top {
		padding-top: 5rem;
	}
	.p-padding {
		max-width: 65rem;
		margin: 0 auto;
		padding-bottom: 5rem;
	}
`;

const Header = styled.div`
	text-align: center;
	padding: 20rem 0rem;
	color: #fff;
	background: url('/ftgu-mission-landscape.jpg') red no-repeat center;
	background-size: cover;
	p {
		max-width: 75rem;
		margin: 0 auto;
	}
`;

const FullWidth = styled(GS.FullWidth)`
	color: #fff;
	text-align: center;
	background: #000;
`;

const WorkTogether = styled(GS.FlexEven)`
	align-items: flex-start;
	@media screen and (max-width: 700px) {
		div {
			img {
				width: 80%;
			}
		}
	}
	@media screen and (max-width: 700px) {
		display: block;
		div:nth-child(1) {
			img {
				width: 70%;
				margin: 0 auto;
				margin-bottom: 5.5rem;
			}
		}
		h2 {
			text-align: center;
		}
		ul {
			text-align: center;
		}
	}
`;

const List = styled.ul`
	padding: ${(props) => props.theme.padding} 0rem;
	li {
		padding: 1rem 0rem;
	}
`;

const Photo = styled.img`
	width: 30rem;
	float: right;
	display: block;
	margin-right: 5rem;
	box-shadow: 1.5rem 1.5rem 0rem ${(props) => props.theme.colors.primary};
	@media screen and (max-width: 700px) {
		float: none;
	}
`;
