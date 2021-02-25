import * as S from './grid.styles';
import * as GS from '../../styles/global';

export default function Grid({ content }) {
	return (
		<S.Grid>
			{content.grid.map((item) => {
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
