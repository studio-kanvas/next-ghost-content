import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Hero from '../../components/hero';

export default function Academy() {
	return (
		<>
			<Layout>
				<Hero message="Blog" background={`url('/ftgu-academy-header.jpg')`} />
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
