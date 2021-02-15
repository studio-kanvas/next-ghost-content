import * as S from './grid.styles';
import * as GS from '../../styles/global';
import { HOMEPAGE } from '../../data/homepage';

export default function Grid() {
	return (
		<S.Grid>
			{HOMEPAGE.grid.map((item) => {
				const { title, description, background } = item;
				return (
					<S.GridItemContainer key={title}>
						<S.GridItem background={background}>
							<div>
								<h4>{title}</h4>
								<p>{description}</p>
							</div>
						</S.GridItem>
					</S.GridItemContainer>
				);
			})}
		</S.Grid>
	);
}
