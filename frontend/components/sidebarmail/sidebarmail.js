import * as S from './sidebarmail.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';
import Title from '../title';

export default function SidebarMail() {
	return (
		<S.Form>
			<h3>Join the Community</h3>
			<p>
				Make an impact with weekly insight, PDF’s and exclusive content Join 50,000+ entrepreneurs who
				are taking action in our community by joining our newsletter.
			</p>
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
		</S.Form>
	);
}
