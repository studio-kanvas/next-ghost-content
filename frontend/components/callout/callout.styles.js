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
		font-weight: 300;
		font-family: Verdana;
	}
`;
