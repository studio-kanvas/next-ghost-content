import Link from 'next/link';
import Header from '../header';
import Footer from '../footer/';
import { ThemeProvider } from 'styled-components';
import Theme from '../../styles/themes';
import GlobalStyle from '../../styles/styles.js';
import MainContext from '../../hooks/context';

const functions = ['ehllo'];

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<MainContext.Provider value={functions}>
				<GlobalStyle />
				<Header />
				{children}
			</MainContext.Provider>
		</ThemeProvider>
	);
};

export default Layout;
