import Link from 'next/link';
import Head from 'next/head';
import * as S from './header.styles';
import * as GS from '../../styles/global';

const Header = () => {
	const title = 'Hello Next!';
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<S.Header>
				<GS.MaxContainer>
					<S.Navigation>
						<div>
							<img src="https://via.placeholder.com/100x50" alt="Logo" />
						</div>
						<div>
							<ul>
								<li>Home</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</div>
					</S.Navigation>
				</GS.MaxContainer>
			</S.Header>
		</>
	);
};

export default Header;
