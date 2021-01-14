import styled from 'styled-components';

//global standalone side padding
export const GlobalPadding = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
`;

//max-container
export const MaxContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`;

//mid-container
export const MidContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.midWidth};
	margin: 0 auto;
`;

//small-container
export const SmContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.smWidth};
	margin: 0 auto;
`;

//full-width
export const FullWidth = styled.div`
	width: 100%;
	margin: 0 auto;
`;

//flex 50/50 split
export const FlexTwo = styled.div`
	display: flex;
	border: 0.1rem solid purple;
	justify-content: center;
	align-items: center;
	margin: ${(props) => props.theme.padding} 0rem;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div {
		flex: 1;
	}
`;

//flex 1/3 split
export const FlexOneThree = styled.div`
	display: flex;
	border: 0.1rem solid purple;
	justify-content: center;
	align-items: center;
	margin: ${(props) => props.theme.padding} 0rem;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div:nth-child(1) {
		flex: 1;
	}
	div:nth-child(2) {
		flex: 2;
	}
`;

//flex 3/1 split
export const FlexThreeOne = styled.div`
	display: flex;
	border: 0.1rem solid purple;
	justify-content: center;
	align-items: center;
	margin: ${(props) => props.theme.padding} 0rem;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div:nth-child(1) {
		flex: 2;
	}
	div:nth-child(2) {
		flex: 1;
	}
`;

//3 column grid
export const GridThree = styled.div`
	display: grid;
	grid-gap: 2rem;
	transition: all 0.25s ease-in-out;
	grid-template-columns: repeat(3, 1fr);
	padding: ${(props) => props.theme.padding} 0rem;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		div {
			margin: ${(props) => props.theme.padding} 0rem;
		}
	}
	div {
		border: 0.1rem solid purple;
	}
`;

//2 column grid
export const GridTwo = styled.div`
	display: grid;
	grid-gap: 2rem;
	transition: all 0.25s ease-in-out;
	grid-template-columns: repeat(2, 1fr);
	padding: ${(props) => props.theme.padding} 0rem;
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		div {
			margin: ${(props) => props.theme.padding} 0rem;
		}
	}
	div {
		border: 0.1rem solid purple;
	}
`;

//main button
export const MainButton = styled.a`
	padding: 0.5rem 1.5rem;
	text-decoration: none;
	transition: all 0.25s ease-in-out;
	color: ${(props) => props.theme.colors.primary};
	border: 0.3rem solid ${(props) => props.theme.colors.primary};
	&:hover {
		background: ${(props) => props.theme.colors.primary};
		color: #fff;
	}
`;
