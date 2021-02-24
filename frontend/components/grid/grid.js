import * as S from './grid.styles';
import * as GS from '../../styles/global';
import { HOMEPAGE } from '../../data/homepage';

export default function Grid() {
	return (
		<S.Grid>
			{HOMEPAGE.grid.map((item) => {
				const { title, description, background } = item;
				return (
					<S.GridItem background={background} key={title}>
						<div className="content">
							<h4>{title}</h4>
							<p>{description}</p>
						</div>
					</S.GridItem>
				);
			})}
		</S.Grid>
	);
}
