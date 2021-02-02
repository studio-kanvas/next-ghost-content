import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	div:nth-child(1) {
		flex: 1;
	}
	div:nth-child(2) {
		width: 15rem;
		text-align: right;
		margin-bottom: 1.25rem;
	}
`;
