import * as S from './title.styles';
import * as GS from '../../styles/global';

export default function Title() {
	return (
		<>
			<S.Flex>
				<div>
					<h2>Title</h2>
				</div>
				<div>Read More</div>
			</S.Flex>
			<GS.HR />
		</>
	);
}
