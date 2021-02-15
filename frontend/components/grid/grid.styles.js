import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Grid = styled(GS.GridThree)`
	grid-template-columns: repeat(3, 1fr);
	padding: 5rem 0rem;
`;

export const GridItemContainer = styled.div`
	overflow: hidden;
`;

export const GridItem = styled.div`
	color: #fff;
	width: 38rem;
	height: 32.5rem;
	background: ${(props) => props.background} no-repeat center center;
	background-size: cover;
	padding: 1.5rem;
	box-sizing: border-box;
	position: relative;
	box-shadow: inset 0 0 0 200rem rgba(0, 0, 0, 0.5);
	transition: all 0.25s ease-in-out;
	&:hover {
		box-shadow: inset 0 0 0 200rem rgba(0, 0, 0, 0);
		cursor: pointer;
	}
	& > div {
		position: absolute;
		width: 90%;
		bottom: 2.5rem;
		p {
			margin: 0;
			padding: 0;
		}
	}
`;
