import * as S from './email.styles';
import * as GS from '../../styles/global';

const Email = () => {
	return (
		<S.HeroBackground>
			<GS.MaxContainer>
				<S.Message>
					<h1>JOIN THE COMMUNITY</h1>
				</S.Message>
				<S.Form>
					<GS.MaxContainer>
						<GS.YPadding>
							<p>
								Make an impact with weekly insight, PDF’s and exclusive content Join 50,000+
								entrepreneurs who are taking action in our community by joining our
								newsletter.
							</p>
							<div id="mc_embed_signup">
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
										<div
											style={{ position: 'absolute', left: '-5000px' }}
											aria-hidden="true"
										>
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
							</div>
						</GS.YPadding>
					</GS.MaxContainer>
				</S.Form>
			</GS.MaxContainer>
		</S.HeroBackground>
	);
};

export default Email;
