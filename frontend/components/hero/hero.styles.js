import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const HeroBackground = styled(GS.FullWidth)`
	background: ${(props) => props.background} no-repeat center center;
	background-size: cover;
	width: 100vw;
	height: 100vh;
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
