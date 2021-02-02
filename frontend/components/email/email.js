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
							<S.FormContainer action="">
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
							</S.FormContainer>
						</GS.YPadding>
					</GS.MaxContainer>
				</S.Form>
			</GS.MaxContainer>
		</S.HeroBackground>
	);
};

export default Email;
