import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Callout from '../components/callout';

export default function Academy() {
	return (
		<>
			<Layout>
				<Hero
					message="From the Ground Up Academy"
					background={`url('/ftgu-academy-header.jpg')`}
					link="Sign Up Now"
					href="/"
				/>
				<GS.MaxContainer>
					<GS.YCPadding padding={'5rem'}>
						<GS.FlexEven>
							<div>
								<h2>Our Training</h2>
								<p>
									Our online training is an in-depth expansion of our YouTube channel and is
									designed to help you navigate the apparel industry from A-Z. With
									worksheets to assist you throughout the training, our goal is to give you
									all the tools you need to successfully launch and grow your brand.
								</p>
								<p>
									In addition to the online training you also get access to a private group,
									and monthly training calls to get your questions answered in real time.
									This program is for those who are ready to take action and see results.
								</p>
								<GS.MainButton>Join Today</GS.MainButton>
							</div>
							<div style={{ position: 'relative' }}>
								<GS.PrimaryBlock
									width={'25rem'}
									height={'35rem'}
									borderRadius={'3rem'}
									top={'4rem'}
									left={'20rem'}
								/>
								<Profile src="/ftgu-john-academy.webp" width="400" height="571" />
							</div>
						</GS.FlexEven>
					</GS.YCPadding>
				</GS.MaxContainer>
				<GS.FullWidth>
					<GS.ImageBackground background={`url('/ftgu-academy-man.webp')`}>
						<GS.MaxContainer>
							<GS.YCPadding padding={'10rem'}>
								<GS.GlobalPadding>
									<GS.FlexEven>
										<div>
											<BigText>
												<div>10X</div>
												<div>Clarity</div>
											</BigText>
										</div>
										<div>
											<p style={{ color: '#fff', textAlign: 'right' }}>
												After navigating the industry from manufacturing, to
												distribution, and eCommerce, we realized that most training
												programs are unclear or don’t even show the logistics of
												getting things properly made and launched in the market. After
												going through this course you will have clarity about all
												facets of the apparel industry, and will be better prepared to
												grow your brand.
											</p>
											<GS.SecondaryButton style={{ float: 'right' }}>
												Sign Up Now
											</GS.SecondaryButton>
										</div>
									</GS.FlexEven>
								</GS.GlobalPadding>
							</GS.YCPadding>
						</GS.MaxContainer>
					</GS.ImageBackground>
				</GS.FullWidth>
				<GS.FullWidth>
					<GS.YCPadding padding={'10rem'}>TBD</GS.YCPadding>
				</GS.FullWidth>
				<GS.FullWidth>
					<GS.ImageBackground background={`url('/ftgu-empower.jpg')`}>
						<GS.MaxContainer>
							<GS.YCPadding padding={'25rem'}>
								<Heading>Empowering you to take action</Heading>
								<Callout
									calloutone={'Step by Step Plan'}
									callouttwo={'Community'}
									calloutthree={'Ongoing Support'}
								/>
							</GS.YCPadding>
						</GS.MaxContainer>
					</GS.ImageBackground>
				</GS.FullWidth>
				<GS.FullWidth>
					<GS.MaxContainer>
						<GS.YCPadding padding={'10rem'}>
							<GS.FlexEven>
								<div>
									<Photo src={'/ftgu-academy-whats-included-700x1000.jpg'} />
								</div>
								<div>
									<h2>What's Included</h2>
									<List>
										<li>Apparel Manufacturing</li>
										<li>Design</li>
										<li>Marketing</li>
										<li>Establishing Your Business</li>
										<li>Monthly Training</li>
										<li>eCommerce</li>
									</List>
								</div>
							</GS.FlexEven>
						</GS.YCPadding>
					</GS.MaxContainer>
				</GS.FullWidth>
				<GS.FullWidth>
					<GS.ImageBackground background={`url('/ftgu-academy-choose-plan.jpg')`}>
						<GS.MaxContainer>
							<GS.YCPadding padding={'10rem'}>
								<Heading>Are you ready to start building from the ground up?</Heading>
								<GS.Center>
									<GS.SecondaryButton>Choose Your Plan</GS.SecondaryButton>
								</GS.Center>
							</GS.YCPadding>
						</GS.MaxContainer>
					</GS.ImageBackground>
				</GS.FullWidth>
			</Layout>
		</>
	);
}

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
`;

const Heading = styled.h2`
	text-align: center;
	color: #fff;
	margin-bottom: 2.5rem;
`;

const BigText = styled.div`
	color: #fff;
	& > div:nth-child(1) {
		padding-top: 5rem;
		font-size: 15rem;
		font-family: ${(props) => props.theme.fonts.header};
	}
	& > div:nth-child(2) {
		left: 3.6rem;
		bottom: 3rem;
		position: relative;
		font-size: 5rem;
		font-family: ${(props) => props.theme.fonts.header};
	}
`;

const Profile = styled.img`
	width: 30rem;
	height: auto;
	float: right;
	position: relative;
	border-radius: 1rem;
`;
