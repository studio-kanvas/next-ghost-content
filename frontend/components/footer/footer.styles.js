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
	padding: 2.5rem 0rem;
	h4 {
		color: #fff;
	}
`;

export const FooterInformation = styled(GS.FlexEven)`
	text-align: left;
	align-items: flex-start;
	& > div:nth-child(1) {
		flex: 1;
		ul {
			li {
				padding: 0.5rem 0rem;
				a {
					text-decoration: none;
					color: #eee;
					&.active {
						color: #fff;
						font-weight: bold;
					}
				}
			}
		}
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			padding-bottom: 2.5rem;
		}
	}
	& > div:nth-child(2) {
		flex: 2;
		form {
			display: flex;
			gap: 5rem;
			.name {
				flex: 1;
			}
			.email {
				flex: 1.75;
			}
			.submit-button {
				flex: 1;
			}
			& > div {
				input {
					box-sizing: border-box;
					padding: 0.75rem;
					margin-right: 1rem;
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
			}
			@media screen and (max-width: ${(props) => props.theme.smWidth}) {
				display: block;
				& > div {
					input {
						margin: 0.5rem 0rem 1.5rem 0rem;
					}
				}
			}
		}
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			text-align: left;
		}
	}
	div {
		color: #fff;
	}
`;
