import styled from 'styled-components';
import * as GS from '../../styles/global';

export const Footer = styled.footer`
	text-align: center;
	img {
		display: block;
	}
`;

export const FooterBg = styled(GS.FullWidth)`
	background: ${(props) => props.theme.colors.grey};
`;

export const FooterNavigation = styled(GS.FlexThreeOne)`
	padding: 2.5rem 0rem;
	border-top: 0.1rem solid #fff;
	border-bottom: 0.1rem solid #fff;
	text-align: left;
	ul {
		li {
			display: inline;
			a {
				color: #fff;
				text-decoration: none;
				padding-right: 2.5rem;
			}
		}
	}
`;

export const FooterInformation = styled(GS.FlexTwo)`
	text-align: left;
	align-items: flex-start;
	& > div:nth-child(1) {
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			padding-bottom: 2.5rem;
		}
	}
	& > div:nth-child(2) {
		text-align: right;
		@media screen and (max-width: ${(props) => props.theme.midWidth}) {
			text-align: left;
		}
	}
	div {
		color: #fff;
	}
`;
