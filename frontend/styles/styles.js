//serves as a master scss file if you will
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
    }
    body, html {
        padding: 0;
        margin: 0;
    }
    h1, h2, h3, h4, h5 {
        margin: 0;
        font-weight: bold;
        letter-spacing: .075rem;
        font-family: ${(props) => props.theme.fonts.header};
        padding: .75rem 0rem;
    }
    h1 {
        font-size: 8rem;
        transition: font-size .25s ease-in-out;
        @media screen and (max-width: ${(props) => props.theme.maxWidth}){
            font-size: 5.5rem;
        };
    }
    h2 {
        font-size: 6rem;
        @media screen and (max-width: ${(props) => props.theme.maxWidth}){
            font-size: 4rem;
        };
    }
    h3 {
        font-size: 4rem;
    }
    h4 {
        font-size: 2.75rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    p, div, li, a, span, input, textarea, form {
        font-size: 1.8rem;
        font-family: ${(props) => props.theme.fonts.main}
    }
    p {
        padding: 1.75rem 0rem;
    }
    a {
        text-decoration: underline;
    }
    pre {
        white-space: pre-wrap;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .pt-1 {
        padding-top: 1rem;
    }
    .pt-2 {
        padding-top: 2rem;
    }
    .pt-3 {
        padding-top: 3rem;
    }
    .pt-4 {
        padding-top: 4rem;
    }
    .pt-5 {
        padding-top: 5rem;
    }
    .pb-1 {
        padding-bottom: 1rem;
    }
    .pb-2 {
        padding-bottom: 2rem;
    }
    .pb-3 {
        padding-bottom: 3rem;
    }
    .pb-4 {
        padding-bottom: 4rem;
    }
    .pb-5 {
        padding-bottom: 5rem;
    }
    .pl-1 {
        padding-left: 1rem;
    }
    .pl-2 {
        padding-left: 2rem;
    }
    .pl-3 {
        padding-left: 3rem;
    }
    .pl-4 {
        padding-left: 4rem;
    }
    .pl-5 {
        padding-left: 5rem;
    }
    .pr-1 {
        padding-right: 1rem;
    }
    .pr-2 {
        padding-right: 2rem;
    }
    .pr-3 {
        padding-right: 3rem;
    }
    .pr-4 {
        padding-right: 4rem;
    }
    .pr-5 {
        padding-right: 5rem;
    }
    .mt-1 {
        margin-top: 1rem;
    }
    .mt-2 {
        margin-top: 2rem;
    }
    .mt-3 {
        margin-top: 3rem;
    }
    .mt-4 {
        margin-top: 4rem;
    }
    .mt-5 {
        margin-top: 5rem;
    }
    .mb-1 {
        margin-bottom: 1rem;
    }
    .mb-2 {
        margin-bottom: 2rem;
    }
    .mb-3 {
        margin-bottom: 3rem;
    }
    .mb-4 {
        margin-bottom: 4rem;
    }
    .mb-5 {
        margin-bottom: 5rem;
    }
    .ml-1 {
        margin-left: 1rem;
    }
    .ml-2 {
        margin-left: 2rem;
    }
    .ml-3 {
        margin-left: 3rem;
    }
    .ml-4 {
        margin-left: 4rem;
    }
    .ml-5 {
        margin-left: 5rem;
    }
    .mr-1 {
        margin-right: 1rem;
    }
    .mr-2 {
        margin-right: 2rem;
    }
    .mr-3 {
        margin-right: 3rem;
    }
    .mr-4 {
        margin-right: 4rem;
    }
    .mr-5 {
        margin-right: 5rem;
    }
`;

export default GlobalStyle;
