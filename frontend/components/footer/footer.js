import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import * as GS from '../../styles/global';
import * as S from './footer.styles';
import { LINKS } from '../../data/links';
import { useRouter } from 'next/router';

const Footer = () => {
	const year = new Date().getFullYear();
	const router = useRouter();
	return (
		<>
			<S.FooterBg>
				<GS.MaxContainer>
					<S.FooterInformation>
						<div>
							<h4>Navigation</h4>
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
						<div>
							<form>
								<div className="name">
									<input placeholder="First Name" type="text" required />
								</div>
								<div className="name">
									<input placeholder="Last Name" type="text" required />
								</div>
								<div className="email">
									<input placeholder="Email Address" type="email" required />
								</div>
								<div className="submit-button">
									<button type="submit">SUBMIT</button>
								</div>
							</form>
						</div>
					</S.FooterInformation>
				</GS.MaxContainer>
			</S.FooterBg>
		</>
	);
};

export default Footer;
