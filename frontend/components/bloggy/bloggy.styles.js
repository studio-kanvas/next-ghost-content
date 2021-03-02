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
	.blog-meta {
		padding-top: 1.5rem;
		font-size: 1.4rem;
		span {
			font-weight: bold;
			font-size: 1.4rem;
		}
	}
`;

export const Article = styled.article`
	img {
		width: 100%;
		height: auto;
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
		padding: 0rem 0rem 2.5rem 0rem;
	}
	h2,
	h3,
	h4,
	h5 {
		margin-bottom: 3rem;
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
		padding-bottom: 3rem;
	}
	figcaption {
		font-style: italic;
		font-size: 1.5rem;
		padding-bottom: 4rem;
	}
	p:nth-child(1) {
		padding-top: 0;
	}
	iframe {
		width: 100%;
		height: 40vh;
	}
	blockquote {
		border-left: 0.5rem solid #000;
		margin-left: 0;
		padding-left: 1.5rem;
		font-style: italic;
	}
	ul {
		margin-left: 1.5rem;
		list-style: circle;
	}
	a {
		text-decoration: underline;
		color: #000;
		font-weight: bold;
	}
	p {
		color: #333;
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
		.title {
			font-size: 1.4rem;
		}
		.tag {
			padding-top: 0.25rem;
			color: #666;
			li {
				display: inline;
				padding-right: 0.5rem;
				a,
				a:visited {
					font-size: 1.4rem;
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
		.created {
			padding-top: 0.5rem;
			font-size: 1.3rem;
			color: #777;
		}
	}
`;
