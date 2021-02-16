import Link from 'next/link';
import Head from 'next/head';
import * as S from './header.styles';
import * as GS from '../../styles/global';
import { LINKS } from '../../data/links';
import { useRouter } from 'next/router';

const Header = () => {
	const title = 'Hello Next!';
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="From The Ground Up Academy is an online training platform for creative entrepreneurs looking to build a brand and impact the world."
				/>
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
							<Link href="/">
								<a>
									<img src={'/ftgu-logo.svg'} alt="Logo" className="logo" />
								</a>
							</Link>
						</div>
						<div>
							<ul>
								{LINKS.map((link) => {
									return (
										<li key={link.title}>
											<Link href={link.link}>
												<a className={router.pathname === link.link && 'active'}>
													{link.title}
												</a>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</S.Navigation>
				</GS.MaxContainer>
			</S.Header>
		</>
	);
};

export default Header;
