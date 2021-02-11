import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../components/layout/layout';
import * as GS from '../../styles/global';
import Hero from '../../components/hero';
import { getTags } from '../../lib/ghost';
import Title from '../../components/title';

export default function Academy({ tags }) {
	return (
		<>
			<Layout>
				<Hero message="Blog" background={`url('/ftgu-academy-header.jpg')`} arrow tags={tags} />
				<GS.MaxContainer>
					<GS.YCPadding padding={'5rem'}>
						<Title title="Top Stories" />
					</GS.YCPadding>
				</GS.MaxContainer>
			</Layout>
		</>
	);
}

export async function getStaticProps(context) {
	const tags = await getTags();
	return {
		props: {
			tags,
		},
	};
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
