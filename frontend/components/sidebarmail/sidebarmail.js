import * as S from './sidebarmail.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';
import Title from '../title';

export default function SidebarMail() {
	return (
		<S.Form>
			<h3>Have email delivered to your inbox.</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sed voluptatem eveniet
				temporibus dolore ipsam odio quisquam ab pariatur modi!
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
