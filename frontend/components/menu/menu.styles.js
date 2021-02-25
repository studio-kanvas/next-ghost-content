import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
	position: fixed;
	z-index: 10;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Menu = styled.ul`
	text-align: center;
	li {
		padding: 1.25rem;
		a {
			color: #ccc;
			font-size: 10vw;
			font-family: ${(props) => props.theme.fonts.header};
			text-decoration: none;
			transition: all 0.25s ease-in-out;
			&:hover {
				color: #fff;
			}
		}
		.active {
			color: #fff;
		}
	}
`;
