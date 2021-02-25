import styled from 'styled-components';
import * as GS from '../../styles/global';

const RESPONSIVE = '900px';

export const BlogContainer = styled(GS.FlexEven)`
	margin: 7rem 0rem 5rem 0rem;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 3rem;
	& > article:nth-child(1) {
		flex: 2;
	}
	& > article:nth-child(2) {
		flex: 0.75;
	}
	@media screen and (max-width: ${RESPONSIVE}) {
		display: block;
		& > article:nth-child(2) {
			margin-top: 5rem;
		}
	}
`;

export const BlogArticles = styled.article`
	h2 {
		font-size: 3.5rem;
		color: #000;
	}
	a {
		color: #555;
		text-decoration: none;
	}
`;

export const Article = styled.article`
	img {
		width: 100%;
		height: auto;
		margin-bottom: 1.5rem;
	}
	ul,
	ol {
		margin: 1.25rem;
		li {
			margin: 1.5rem 0rem;
		}
	}
	p {
		margin: 0;
		padding: 2.5rem 0rem 0rem 0rem;
	}
	h2,
	h3,
	h4,
	h5 {
		margin-top: 3rem;
	}
	h3 {
		font-size: 3rem;
	}
	h4 {
		font-size: 2.75rem;
	}
	h5 {
		font-size: 2.5rem;
	}
`;

export const Content = styled.div`
	figure {
		padding: 0;
		margin: 0;
	}
	img {
		padding-top: 3rem;
	}
	figcaption {
		font-style: italic;
		font-size: 1.6rem;
	}
`;

export const Blog = styled.ul`
	margin-bottom: 5rem;
	li {
		img {
			width: 100%;
			height: auto;
		}
	}
`;

export const FeaturedArticles = styled.article`
	.title-container {
		margin-bottom: 1rem;
		position: relative;
		bottom: 1.2rem;
		h3 {
			font-size: 3rem;
		}
		.hr {
			display: none;
		}
	}
`;

export const FlexArticles = styled.div`
	display: block;
	@media screen and (max-width: ${RESPONSIVE}) {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 550px) {
		display: block;
	}
`;

export const TopBlogs = styled(GS.FlexEven)`
	align-items: center;
	justify-content: center;
	margin-bottom: 3.5rem;
	@media screen and (max-width: ${RESPONSIVE}) {
		align-items: flex-start;
	}
	& > div:nth-child(1) {
		flex: 0.75;
		a img {
			width: 8rem;
			height: 8rem;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	& > div:nth-child(2) {
		position: relative;
		bottom: 0.5rem;
		margin-left: 1rem;
		flex: 2.5;
		.tag {
			padding-top: 0.75rem;
			font-size: 1.4rem;
			color: #666;
			li {
				display: inline;
				padding-right: 0.5rem;
				a,
				a:visited {
					text-decoration: none;
					font-family: ${(props) => props.theme.fonts.header};
					color: #000;
				}
				&::after {
					content: ' /';
				}
				&:nth-last-child(1)::after {
					content: '';
				}
			}
		}
		.updated {
			padding-top: 0.5rem;
			font-size: 1.3rem;
			color: #777;
		}
	}
`;
