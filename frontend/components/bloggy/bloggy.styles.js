import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const BlogContainer = styled(GS.FlexEven)`
	align-items: stretch;
	justify-content: center;
	margin-top: 7rem;
	gap: 3rem;
	& > article:nth-child(1) {
		flex: 2;
	}
	& > article:nth-child(2) {
		flex: 0.75;
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
	h2 {
		margin-top: 3rem;
	}
`;

export const Content = styled.div``;

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

export const TopBlogs = styled(GS.FlexEven)`
	align-items: center;
	justify-content: center;
	margin-bottom: 3.5rem;
	& > div:nth-child(1) {
		flex: 1;
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
		margin-left: 0.25rem;
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
