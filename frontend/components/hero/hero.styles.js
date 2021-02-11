import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const HeroBackground = styled(GS.FullWidth)`
	background: ${(props) => props.background} no-repeat center center;
	background-size: cover;
	width: 100vw;
	height: ${(props) => (props.height ? props.height : '50vh;')};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Message = styled.div`
	max-width: 70rem;
	text-align: center;
	margin: 0 auto;
	h1 {
		color: #fff;
	}
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
