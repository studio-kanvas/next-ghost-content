import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const stagger = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			default: {
				staggerChildren: 0,
			},
		},
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 1,
		},
	},
};

export const fadeInTop = {
	initial: {
		opacity: 0,
		y: -100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
		},
	},
	exit: {
		opacity: 0,
		x: 100,
	},
};

export const fadeInRight = {
	initial: {
		opacity: 0,
		x: -100,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.5,
		},
	},
	exit: {
		opacity: 0,
		x: 100,
	},
};

export const fadeInLeft = {
	initial: {
		opacity: 0,
		x: 100,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.4,
			mass: 0.1,
		},
	},
	exit: {
		opacity: 0,
		x: 100,
		transition: {
			duration: 1,
		},
	},
};

export const exit = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
	},
};

const ArrowAnimation = keyframes`
	0% {
		bottom: -1rem;
	}
	50% {
		bottom: -2rem;
	}
	100% {
		bottom: -1rem;
	}
`;

export const Center = styled.div`
	margin: 0 auto;
	text-align: center;
`;

export const GlobalPadding = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
`;

export const YPadding = styled.div`
	padding: ${(props) => props.theme.padding} 0rem;
`;

export const XPadding = styled.div`
	padding-left: ${(props) => props.theme.padding};
	padding-right: ${(props) => props.theme.padding};
`;

export const XCPadding = styled.div`
	padding-left: ${(props) => props.padding};
	padding-right: ${(props) => props.padding};
`;

export const YCPadding = styled.div`
	padding: ${(props) => props.padding} 0rem;
`;

//max-container
export const MaxContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`;

//mid-container
export const MidContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.midWidth};
	margin: 0 auto;
`;

//small-container
export const SmContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.smWidth};
	margin: 0 auto;
`;

//full-width
export const FullWidth = styled.div`
	width: 100%;
	margin: 0 auto;
`;

//flex 50/50 split
export const FlexEven = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		flex: 1;
	}
`;

//flex 1/3 split
export const FlexOneThree = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div:nth-child(1) {
		flex: 1;
	}
	div:nth-child(2) {
		flex: 2;
	}
`;

//flex 3/1 split
export const FlexThreeOne = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div:nth-child(1) {
		flex: 2;
	}
	div:nth-child(2) {
		flex: 1;
	}
`;

//3 column grid
export const GridThree = styled.div`
	display: grid;
	grid-gap: 2rem;
	transition: all 0.25s ease-in-out;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		div {
			margin: ${(props) => props.theme.padding} 0rem;
		}
	}
`;

//2 column grid
export const GridTwo = styled.div`
	display: grid;
	grid-gap: 2rem;
	transition: all 0.25s ease-in-out;
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		div {
			margin: ${(props) => props.theme.padding} 0rem;
		}
	}
`;

//main button
export const MainButton = styled(motion.a)`
	padding: 1.25rem 2.5rem;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 2rem;
	font-family: ${(props) => props.theme.fonts.header};
	transition: all 0.25s ease-in-out;
	color: ${(props) => props.theme.colors.primary};
	border: 0.3rem solid ${(props) => props.theme.colors.primary};
	display: inline-block;
	margin: 1rem 0rem;
	&:hover {
		background: ${(props) => props.theme.colors.primary};
		box-shadow: 0.5rem 0.5rem 0 #222;
		text-decoration: none;
		cursor: pointer;
		color: #fff;
	}
`;

export const SecondaryButton = styled(MainButton)`
	color: #fff;
	border: 0.3rem solid #fff;
	&:hover {
		background: #fff;
		color: #000;
	}
`;

//flexcenter
export const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	height: auto;
`;

//used to describe portfolio pieces
export const Meta = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	max-width: 80rem;
	margin: 0 auto;
	div {
		padding-right: ${(props) => props.theme.padding};
		&:nth-child(1) {
			flex: 1.2;
		}
		&:nth-child(2) {
			flex: 1.2;
		}
		&:nth-child(3) {
			flex-basis: auto;
			min-width: 9rem;
			max-width: 10rem;
			padding-right: 0;
		}
	}
	ul {
		li {
			display: inline;
			margin-right: 1.5rem;
			img {
				transition: all 0.25s ease-in-out;
				&:hover {
					transform: scale(1.1);
				}
			}
		}
		margin-bottom: ${(props) => props.theme.padding};
	}
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
		ul {
			margin-bottom: 1rem;
		}
	}
`;

export const PortfolioWrapper = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	display: flex;
	justify-content: center;
	.portfolio-content {
		flex: 1;
		height: auto;
	}
`;

export const Button = styled(MainButton)`
	text-align: center;
	width: 100%;
`;

export const Block = styled.div`
	position: absolute;
	z-index: -0;
	transition: background 0.25s ease-in-out;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	background: ${(props) => props.theme.colors.block};
`;

export const ScrollContainer = styled.div`
	/* scroll-snap-type: y proximity;
	height: 100vh;
	overflow-y: scroll;
	& > .scroll-child {
		scroll-snap-align: start;
	} */
`;

export const HR = styled.div`
	width: 100%;
	border-bottom: 0.5rem solid #000;
	padding: 0.2rem 0rem;
`;

export const PrimaryBlock = styled.div`
	z-index: 0;
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.borderRadius};
	background: ${(props) => props.theme.colors.primary};
`;

export const ImageBackground = styled.div`
	background: ${(props) => props.background} no-repeat top center;
	background-size: cover;
`;

export const Arrow = styled.div`
	color: #fff;
	opacity: 0.5;
	font-size: 7rem;
	text-align: center;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0%);
	animation: ${ArrowAnimation} 2s ease-in-out infinite;
`;

export const Pagination = styled(FlexEven)`
	.next,
	.prev {
		flex: 1;
		&:hover {
			cursor: pointer;
		}
		span {
			border: 0.25rem solid #000;
			padding: 0.5rem 1rem;
			transition: all 0.25s ease-in-out;
			font-size: 2.5rem;
			font-family: ${(props) => props.theme.fonts.header};
			svg {
				position: relative;
				top: 0.3rem;
				width: 2rem;
			}
			&:hover {
				background: #000;
				color: #fff;
				box-shadow: 0.5rem 0.5rem 0 #333;
			}
		}
	}
	.prev {
		text-align: right;
	}
	.pages {
		flex: 1;
		text-align: center;
	}
`;
