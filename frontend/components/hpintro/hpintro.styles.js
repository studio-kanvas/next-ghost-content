import styled from 'styled-components';
import * as GS from '../../styles/global';

export const HomepageFlex = styled(GS.FlexTwo)`
	.first-flex {
		padding: 0rem 4rem 0rem 0rem;
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			padding: 5rem 0rem 3rem 0rem;
		}
		.content {
			position: relative;
			.box {
				width: 6rem;
				height: 6rem;
				background: #ffd1d1;
				position: absolute;
				top: -1rem;
				left: -2rem;
				z-index: -1;
				@media screen and (max-width: ${(props) => props.theme.midWidth}) {
					width: 4rem;
					height: 4rem;
					left: -1rem;
				}
			}
			h2 {
				color: #000;
				font-size: 2.5rem;
			}
			p {
			}
		}
	}
`;

export const Grid = styled(GS.GridThree)`
	div {
		border: none;
		height: 16vh;
		&:nth-child(1) {
			grid-area: 1/1/1/2;
		}
		&:nth-child(2) {
			grid-area: 1/2/1/4;
		}
		&:nth-child(3) {
			grid-area: 2/1/2/4;
		}
		img {
			object-fit: cover;
			transition: transform 0.25s ease-in-out;
			&:hover {
				transform: scale(1.05);
			}
		}
	}
`;
