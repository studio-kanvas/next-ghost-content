import * as S from './title.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';

export default function Title({ title, text, href }) {
	return (
		<div className="title-container">
			<S.Flex>
				<div>
					<h3>{title}</h3>
				</div>
				{text && (
					<div>
						<Link href={href}>
							<a>{text}</a>
						</Link>
					</div>
				)}
			</S.Flex>
			<GS.HR className="hr" />
		</div>
	);
}
