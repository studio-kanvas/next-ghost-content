import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import * as GS from '../../styles/global';
import * as S from './footer.styles';
import { LINKS } from '../../data/links';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
	const router = useRouter();
	useEffect(() => {
		const year = new Date().getFullYear();
		document.querySelector('.copy-year').innerHTML = year;
	}, []);

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
												<a
													className={
														router.pathname === link.link ? 'active' : undefined
													}
												>
													{link.title}
												</a>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
						<div id="mc_embed_signup">
							<h4>Join the Community</h4>
							<form
								action="https://concretemediagroup.us9.list-manage.com/subscribe/post?u=3884755395aea8bb9f8e467fc&amp;id=ffa0aeb2b9"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								className="validate"
								target="_blank"
								noValidate
							>
								<S.FormContainer id="mc_embed_signup_scroll">
									<div className="mc-field-group name">
										<input
											type="text"
											name="FNAME"
											id="mce-FNAME"
											placeholder="First Name"
											required
										/>
									</div>
									<div className="mc-field-group name">
										<input
											type="text"
											placeholder="Last Name"
											required
											name="LNAME"
											id="mce-LNAME"
										/>
									</div>
									<div className="mc-field-group email">
										<input
											type="email"
											placeholder="Email Address"
											name="EMAIL"
											id="mce-EMAIL"
											required
										/>
									</div>
									<div id="mce-responses" className="clear hidden">
										<div className="response" id="mce-error-response"></div>
										<div className="response" id="mce-success-response"></div>
									</div>
									{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
									<div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
										<input
											type="text"
											name="b_3884755395aea8bb9f8e467fc_ffa0aeb2b9"
											tabIndex="-1"
										/>
									</div>
									<div className="clear">
										<input
											type="submit"
											value="Subscribe"
											name="subscribe"
											id="mc-embedded-subscribe"
											className="button submit-button"
										/>
									</div>
								</S.FormContainer>
							</form>
							<p>
								&copy; <span className="copy-year"></span> From The Ground Up. All Rights
								Reserved.
							</p>
							<ul>
								<li>
									<Link href="https://www.youtube.com/johnxsantos">
										<a target="_blank">
											<FaYoutube />
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.facebook.com/JohnXSantos1">
										<a target="_blank">
											<FaFacebookSquare />
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/johnxsantos/">
										<a target="_blank">
											<FaInstagram />
										</a>
									</Link>
								</li>
								<li>
									<Link href="https://www.tiktok.com/@johnxsantos">
										<a target="_blank">
											<SiTiktok />
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</S.FooterInformation>
				</GS.MaxContainer>
			</S.FooterBg>
		</>
	);
};

export default Footer;
