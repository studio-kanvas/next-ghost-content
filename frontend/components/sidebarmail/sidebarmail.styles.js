import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const Form = styled.form`
	border: 0.5rem solid #000;
	padding: 1.5rem;
	h3 {
		font-size: 3rem;
		text-align: center;
	}
	p {
		margin-top: 0;
		text-align: center;
	}
	input {
		box-sizing: border-box;
		padding: 0.5rem;
		margin: 0.75rem 0rem;
		width: 100%;
	}
	button {
		background: #f84f49;
		padding: 1.2rem 3rem;
		font-weight: bold;
		color: #fff;
		width: 100%;
		border: 0;
	}
`;
