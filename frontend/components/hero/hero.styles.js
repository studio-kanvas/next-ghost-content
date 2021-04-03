import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const HeroBackground = styled(GS.FullWidth)`
	background: ${(props) => props.background} no-repeat center;
	background-size: cover;
	background-position: ${(props) => props.backgroundPosition};
	width: 100vw;
	height: ${(props) => (props.height ? props.height : 'auto')};
	display: flex;
	justify-content: center;
	align-items: center;
	&.darken {
		box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
	}
`;

export const Message = styled.div`
	max-width: ${props => props.theme.maxWidth};
	text-align: center;
	margin: 0 auto;
	padding: 15rem 0rem;
	h1 {
		color: #fff;
		font-size: 7rem;
		margin-bottom: 2rem;
	}
	@media screen and (max-width: ${(props) => props.theme.iphoneplus}) {
		h1 {
			font-size: 3rem;
		}
	}
`;

export const Description = styled.p`
	font-size: 2.4rem;
	color: #fff;
`;

export const Tags = styled.ul`
	margin-top: 2.5rem;
	li {
		display: inline;
		a {
			padding: 0rem 1rem;
			color: #fff;
			font-size: 2rem;
			text-decoration: none;
			font-family: ${(props) => props.theme.fonts.header};
		}
	}
`;

export const SingleArticle = styled(GS.FlexEven)`
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 auto;
	div {
		flex: 1;
	}
	div,
	a {
		color: #eee;
		font-size: 2.5rem;
		font-family: ${(props) => props.theme.fonts.header};
	}
	a {
		padding-right: 1rem;
		text-decoration: none;
	}
	@media screen and (max-width: 1100px) {
		display: block;
		div {
			padding: 1rem 0rem;
		}
	}
	@media screen and (max-width: ${(props) => props.theme.iphoneplus}) {
		.author {
			font-size: 1.9rem;
		}
		div,
		a {
			font-size: 1.7rem;
		}
	}
`;
