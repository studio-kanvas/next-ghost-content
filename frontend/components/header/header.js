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
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<S.Header>
				<GS.MaxContainer>
					<S.Navigation>
						<div>
							<img src="https://via.placeholder.com/100x50" alt="Logo" />
						</div>
						<div>
							<ul>
								<li>
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>
								<li>
									<Link href="/academy">
										<a>Academy</a>
									</Link>
								</li>
								<li>
									<Link href="/mission">
										<a>Mission</a>
									</Link>
								</li>
								<li>
									<Link href="/blog">
										<a>Blog</a>
									</Link>
								</li>
								<li>
									<Link href="/assets">
										<a>Assets</a>
									</Link>
								</li>
							</ul>
						</div>
					</S.Navigation>
				</GS.MaxContainer>
			</S.Header>
		</>
	);
};

export default Header;
