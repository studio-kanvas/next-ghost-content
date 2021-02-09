import * as S from './callout.styles';
import * as GS from '../../styles/global';

export default function Callout({ calloutone, calloutthree, callouttwo }) {
	return (
		<S.Call>
			<div>{calloutone}</div>
			<div className="x">X</div>
			<div>{callouttwo}</div>
			<div className="x">X</div>
			<div>{calloutthree}</div>
		</S.Call>
	);
}
