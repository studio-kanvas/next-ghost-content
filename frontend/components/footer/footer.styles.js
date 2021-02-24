import styled from 'styled-components';
import * as GS from '../../styles/global';

export const Footer = styled.footer`
	text-align: center;
	img {
		display: block;
	}
`;

export const FooterBg = styled(GS.FullWidth)`
	background: #000;
	border-top: 0.1rem solid #555;
	padding: 2.5rem 0rem;
	h4 {
		color: #fff;
	}
`;

export const FooterInformation = styled(GS.FlexEven)`
	text-align: left;
	align-items: flex-start;
	@media screen and (max-width: 900px) {
		display: block;
	}
	& > div:nth-child(1) {
		flex: 1;
		ul {
			padding-bottom: 2.5rem;
			li {
				padding: 0.5rem 0rem;
				a {
					text-decoration: none;
					color: #ccc;
					&.active {
						color: #fff;
						font-weight: bold;
					}
				}
			}
		}
	}
	& > div:nth-child(2) {
		flex: 2;
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			text-align: left;
		}
	}
	div {
		color: #fff;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	gap: 1rem;
	.name {
		flex: 1;
	}
	.email {
		flex: 1;
	}
	.submit-button {
		flex: 1;
	}
	& > div {
		&.hidden {
			display: none;
		}
		input {
			box-sizing: border-box;
			padding: 0.75rem;
			margin-right: 1rem;
			width: 100%;
		}
		.submit-button {
			background: #f84f49;
			padding: 1.15rem 3rem;
			font-weight: bold;
			color: #fff;
			width: 100%;
			border: 0;
			font-family: ${(props) => props.theme.fonts.header};
		}
	}
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		& > div {
			input {
				margin: 0.5rem 0rem 1.5rem 0rem;
			}
		}
	}
`;
