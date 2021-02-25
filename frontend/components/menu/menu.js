import * as S from './menu.styles';
import * as GS from '../../styles/global';
import { LINKS } from '../../data/links';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Fade from 'react-reveal/Fade';

export default function Menu() {
	const router = useRouter();
	return (
		<AnimatePresence>
			<S.Background variants={GS.fadeInLeft} initial="initial" animate="animate" exit="exit">
				<S.Menu>
					{LINKS.map((link) => {
						return (
							<Fade top cascade key={link.title}>
								<li>
									<Link href={link.link}>
										<a className={router.pathname === link.link ? 'active' : undefined}>
											{link.title}
										</a>
									</Link>
								</li>
							</Fade>
						);
					})}
				</S.Menu>
			</S.Background>
		</AnimatePresence>
	);
}
