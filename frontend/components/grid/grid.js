import * as S from './grid.styles';
import * as GS from '../../styles/global';
import Link from 'next/link';

export default function Grid({ content }) {
	return (
		<S.Grid>
			{content.grid.map((item) => {
				const { title, description, background, link } = item;
				return (
					<Link href={link} key={title}>
						<S.GridItem background={background}>
							<a target="_blank">
								<div className="content">
									<h4>{title}</h4>
									<p>{description}</p>
								</div>
							</a>
						</S.GridItem>
					</Link>
				);
			})}
		</S.Grid>
	);
}
