import styled from 'styled-components';
import * as GS from '../../styles/global';

const RESPONSIVE = '900px';

export const BlogContainer = styled(GS.FlexEven)`
	margin: 7rem 0rem 5rem 0rem;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 7.5rem;
	& > article:nth-child(1) {
		flex: 2;
	}
	& > article:nth-child(2) {
		flex: 1;
	}
	@media screen and (max-width: ${RESPONSIVE}) {
		display: block;
		& > article:nth-child(2) {
			margin-top: 5rem;
		}
	}
`;

export const BlogArticles = styled.article`
	img {
		opacity: 0.8;
		transition: all 0.25s ease-in-out;
		&:hover {
			opacity: 1;
		}
	}
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
	.tag-li {
		padding-bottom: 1.5rem;
		.tag {
			font-family: ${(props) => props.theme.fonts.header};
			font-size: 1.7rem;
			color: #666;
			padding-right: 0.5rem;
			&:after {
				content: ' x';
			}
			&:nth-last-child(1)::after {
				content: '';
			}
		}
	}
`;

export const Article = styled.article`
	.blog-meta {
		font-size: 1.4rem;
		color: #333;
		.tag {
			padding-right: 0.5rem;
			&:after {
				content: ' x';
			}
			&:nth-last-child(1)::after {
				content: '';
			}
		}
	}
	.blog-meta a {
		font-family: ${(props) => props.theme.fonts.header};
		font-size: 1.5rem;
		color: #000;
	}
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
	.fb-share-button {
		border: .1rem solid #333;
		padding: .5rem 1rem;
		text-transform: uppercase;
		width: 8rem;
		text-align: center;
		a {
			font-size: 1.2rem;
		}
		svg {
			top: .175rem;
			position: relative;
		}
		transition: all .25s ease-in-out;
		&:hover {
			background: #333;
			color: #fff;
			svg, a {
				color: #fff;
			}
			cursor: pointer;
		}
	}
`;

export const Content = styled.div`
	figure {
		padding: 0;
		margin: 0;
	}
	figcaption {
		font-style: italic;
		font-size: 1.5rem;
		padding-top: 3rem;
		text-align: center;
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
		line-height: 3.1rem;
		margin: 0;
		padding: 1.5rem 0rem;
	}
`;

export const Blog = styled.ul`
	margin-bottom: 5rem;
	li {
		img {
			width: 100%;
			height: auto;
		}
		h2 {
			padding-bottom: 0;
		}
		.read-more {
			font-family: ${props => props.theme.fonts.header};
			font-size: 1.6rem;
		}
		p {
			padding: 0rem;
			margin: 0rem;
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
					content: ' x';
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
