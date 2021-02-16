import styled from 'styled-components';

//standard solid header - solid color background
export const Header = styled.header`
	margin: 0 auto;
	width: 100%;
	position: fixed;
	z-index: 10;
`;

//transparent header - meant for header to blend in with background
export const THeader = styled.header`
	margin: 0 auto;
	background: none;
	width: 100%;
`;

//navigation items - aligns right
export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	padding: 1.5rem 0rem;
	div {
		flex: 1;
		.logo {
			max-width: 20rem;
		}
	}
	div:nth-child(2) {
		text-align: right;
		ul {
			li {
				display: inline;
				padding: 1rem;
				color: #eee;
				a,
				a:visited {
					color: #eee;
					text-decoration: none;
				}
				a.active {
					color: #fff;
					font-weight: bold;
				}
			}
		}
	}
`;
