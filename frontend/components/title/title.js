import * as S from './title.styles';
import * as GS from '../../styles/global';

export default function Title({ title }) {
	return (
		<div className="title-container">
			<S.Flex>
				<div>
					<h3>{title}</h3>
				</div>
			</S.Flex>
			<GS.HR className="hr" />
		</div>
	);
}
