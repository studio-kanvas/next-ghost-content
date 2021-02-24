import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Callout from '../components/callout';
import { ACADEMY } from '../data/academy';
import Title from '../components/title';

const TRAINING = '900px';
const CLARITY = '700px';
const INCLUDED = '700px';

export default function Academy() {
	return (
		<>
			<Layout>
				<Hero
					message={ACADEMY.first.message}
					background={ACADEMY.first.background}
					link={ACADEMY.first.link}
					href={ACADEMY.first.href}
				/>
				<GS.MaxContainer>
					<GS.YCPadding padding={'5rem'}>
						<Training>
							<div>
								<Title title={ACADEMY.second.header} />
								<span dangerouslySetInnerHTML={{ __html: ACADEMY.second.message }} />
								<GS.MainButton className="button">Join Today</GS.MainButton>
							</div>
							<div>
								<Profile src="/ftgu-john-academy.webp" width="400" height="571" />
							</div>
						</Training>
					</GS.YCPadding>
				</GS.MaxContainer>
				<GS.FullWidth>
					<GS.ImageBackground background={`url('/ftgu-academy-man.webp')`}>
						<GS.MaxContainer>
							<GS.YCPadding padding={'10rem'}>
								<Clarity>
									<div>
										<BigText>
											<div>10X</div>
											<div>Clarity</div>
										</BigText>
									</div>
									<div>
										<p
											dangerouslySetInnerHTML={{
												__html: ACADEMY.third.message,
											}}
										/>
										<GS.SecondaryButton className="button">
											Sign Up Now
										</GS.SecondaryButton>
									</div>
								</Clarity>
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
								<Heading>{ACADEMY.fourth.header}</Heading>
								<Callout
									calloutone={ACADEMY.fourth.calloutone}
									callouttwo={ACADEMY.fourth.callouttwo}
									calloutthree={ACADEMY.fourth.calloutthree}
								/>
							</GS.YCPadding>
						</GS.MaxContainer>
					</GS.ImageBackground>
				</GS.FullWidth>
				<GS.FullWidth>
					<GS.MaxContainer>
						<GS.YCPadding padding={'10rem'}>
							<Included>
								<div>
									<Photo src={'/ftgu-academy-whats-included-700x1000.jpg'} />
								</div>
								<div>
									<h2>What's Included</h2>
									<List>
										<li>{ACADEMY.fifth.item1}</li>
										<li>{ACADEMY.fifth.item2}</li>
										<li>{ACADEMY.fifth.item3}</li>
										<li>{ACADEMY.fifth.item4}</li>
										<li>{ACADEMY.fifth.item5}</li>
										<li>{ACADEMY.fifth.item6}</li>
									</List>
								</div>
							</Included>
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

const Training = styled(GS.FlexEven)`
	position: relative;
	div:nth-child(1) {
		flex: 1.5;
	}
	@media screen and (max-width: ${TRAINING}) {
		display: block;
		h3 {
			margin-left: 7rem;
		}
	}
`;

const Included = styled(GS.FlexEven)`
	align-items: flex-start;
	@media screen and (max-width: ${INCLUDED}) {
		div {
			img {
				width: 80%;
			}
		}
	}
	@media screen and (max-width: ${INCLUDED}) {
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

const Clarity = styled(GS.FlexEven)`
	div:nth-child(2) {
		flex: 1.5;
		p {
			color: #fff;
			text-align: right;
		}
		.button {
			float: right;
		}
	}
	@media screen and (max-width: ${CLARITY}) {
		display: block;
		text-align: center;
		div:nth-child(2) {
			p {
				text-align: center;
			}
			.button {
				float: none;
			}
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
	@media screen and (max-width: ${INCLUDED}) {
		float: none;
	}
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
		@media screen and (max-width: ${CLARITY}) {
			left: 1rem;
			text-align: center;
		}
	}
`;

const Profile = styled.img`
	width: 30rem;
	height: auto;
	float: right;
	position: relative;
	border-radius: 1rem;
	transition: all 0.25s ease-in-out;
	@media screen and (max-width: ${TRAINING}) {
		position: absolute;
		top: -3.5rem;
		width: 6rem;
		z-index: -1;
		box-shadow: 0.3rem 0.3rem 0rem ${(props) => props.theme.colors.primary};
	}
`;
