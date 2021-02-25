import * as S from './callout.styles';
import * as GS from '../../styles/global';
import Fade from 'react-reveal/Fade';
import { FiBookOpen } from 'react-icons/fi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';

export default function Callout({ calloutone, calloutthree, callouttwo }) {
	return (
		<S.Call>
			<Fade bottom cascade>
				<div>
					<FiBookOpen />
					{calloutone}
				</div>
				<div className="x">X</div>
				<div>
					<BsFillPeopleFill />
					{callouttwo}
				</div>
				<div className="x">X</div>
				<div>
					<FaHandsHelping />
					{calloutthree}
				</div>
			</Fade>
		</S.Call>
	);
}
