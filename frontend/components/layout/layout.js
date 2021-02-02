import Link from 'next/link';
import Header from '../header';
import Footer from '../footer/';
import { ThemeProvider } from 'styled-components';
import Theme from '../../styles/themes';
import GlobalStyle from '../../styles/styles.js';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Header />
			{children}
		</ThemeProvider>
	);
};

export default Layout;
