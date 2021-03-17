import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

//standard solid header - solid color background
export const Header = styled.header`
	margin: 0 auto;
	width: 100%;
	position: fixed;
	z-index: 10;
`;

//transparent header - meant for header to blend in with background
export const THeader = styled.header`
	margin: 0 auto;
	background: none;
	width: 100%;
`;

export const Backdrop = styled(motion.div)`
	position: fixed;
	background: linear-gradient(to bottom, black, rgba(255, 0, 0, 0));
	width: 100%;
	height: 10rem;
	z-index: -1;
	top: 0;
	left: 0;
	opacity: 0.5;
`;

export const NavContainer = styled(GS.FullWidth)`
	&.invert:before {
		box-shadow: -5.5rem 5rem 5rem rgba(0, 0, 0, 1);
		content: '';
		position: absolute;
		z-index: -1;
		width: 130%;
		height: 100%;
		top: -8.5rem;
	}
`;

//navigation items - aligns right
export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	padding: 1.75rem 0rem;
	div {
		flex: 1;
		.logo {
			max-width: 18rem;
			position: relative;
			left: 0;
			transition: position 0.25s ease-in-out;
			@media screen and (max-width: 700px) {
				position: absolute;
				top: 1.5rem;
				left: 50%;
				transform: translate(-50%, 0%);
			}
		}
		.invert {
			filter: brightness(1) invert(1);
		}
	}
	div:nth-child(2) {
		text-align: right;
		ul {
			li {
				display: inline;
				padding: 1rem;
				color: #eee;
				a {
					text-shadow: 0.1rem 0.1rem 0rem rgba(0, 0, 0, 0.5);
				}
				a,
				a:visited {
					color: #eee;
					text-decoration: none;
					font-family: ${(props) => props.theme.fonts.header};
					transition: color 0.25s ease-in-out;
				}
				a:hover {
					color: #fff;
				}
				a.active {
					color: #fff;
					font-weight: bold;
				}
				.menu {
					height: 2.5rem;
					width: 2.5rem;
					opacity: 0.8;
					margin-top: 0rem;
					transition: all 0.25s ease-in-out;
					&:hover {
						cursor: pointer;
						opacity: 1;
					}
				}
			}
		}
		@media screen and (max-width: 700px) {
			flex: 0.5;
		}
	}
`;
