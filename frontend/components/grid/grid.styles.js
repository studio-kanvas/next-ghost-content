import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Grid = styled(GS.GridThree)`
	grid-template-columns: repeat(3, 1fr);
	padding: 5rem 0rem;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
`;

export const GridItem = styled.div`
	color: #fff;
	max-width: 39rem;
	height: 32.5rem;
	background: ${(props) => props.background} no-repeat center center;
	background-size: cover;
	padding: 1.5rem;
	box-sizing: border-box;
	display: flex;
	align-items: flex-end;
	text-align: left;
	box-shadow: inset 0 0 0 200rem rgba(0, 0, 0, 0.5);
	transition: all 0.25s ease-in-out;
	&:hover {
		box-shadow: inset 0 0 0 200rem rgba(0, 0, 0, 0);
		cursor: pointer;
	}
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		max-width: 100%;
		margin: 2.5rem 0rem;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
	.content {
		margin-bottom: 0.5rem;
		p {
			margin: 0;
			padding: 0;
		}
	}
`;
