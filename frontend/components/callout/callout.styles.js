import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Call = styled(GS.FlexEven)`
	justify-content: center;
	align-items: center;
	color: #fff;
	& > div {
		text-align: center;
		svg {
			display: block;
			margin: 0 auto;
			padding-bottom: 1rem;
			width: 3rem;
			height: 3rem;
		}
	}
	.x {
		opacity: 0.5;
		span {
			font-size: 3rem;
		}
	}
	@media screen and (max-width: 700px) {
		display: block;
		div {
			padding: 3rem 0rem;
		}
		.x {
			display: none;
		}
	}
`;
