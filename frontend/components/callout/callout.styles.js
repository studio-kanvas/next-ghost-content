import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Call = styled(GS.FlexEven)`
	justify-content: center;
	align-items: center;
	color: #fff;
	& > div {
		text-align: center;
	}
	.x {
		font-size: 5rem;
		font-weight: 100;
		opacity: 0.75;
		position: relative;
		top: 0.4rem;
		font-family: Sans-serif;
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
