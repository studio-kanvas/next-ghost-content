import * as S from './title.styles';
import * as GS from '../../styles/global';

export default function Title({ title }) {
	return (
		<>
			<S.Flex>
				<div>
					<h2>{title}</h2>
				</div>
				<div>Read More</div>
			</S.Flex>
			<GS.HR />
		</>
	);
}
