import styled from 'styled-components';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Link from 'next/link';

export default function Assets() {
	return (
		<>
			<Layout>
				<Hero message={'Assets'} />
				<GS.MaxContainer>
					<Grid>
						<div>
							<img src="https://picsum.photos/200/300" />
							<div>
								<div className="container">
									<h2>Build an online Store</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton>Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src="https://picsum.photos/200/300" />
							<div>
								<div className="container">
									<h2>Build an online Store</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton>Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src="https://picsum.photos/200/300" />
							<div>
								<div className="container">
									<h2>Build an online Store</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton>Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src="https://picsum.photos/200/300" />
							<div>
								<div className="container">
									<h2>Build an online Store</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton>Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src="https://picsum.photos/200/300" />
							<div>
								<div className="container">
									<h2>Build an online Store</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton>Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src="https://picsum.photos/200/300" />
							<div>
								<div className="container">
									<h2>Build an online Store</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton>Learn More</GS.MainButton>
								</div>
							</div>
						</div>
					</Grid>
				</GS.MaxContainer>
			</Layout>
		</>
	);
}

const Grid = styled(GS.GridThree)`
	grid-template-columns: repeat(3, 1fr);
	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 640px) {
		display: block;
		div {
			margin: 0rem 0rem 3rem 0rem;
		}
	}
	div {
		img {
			display: block;
			width: 100%;
			height: 26rem;
			object-fit: cover;
		}
		.container {
			padding: 1.5rem 2.5rem;
			border: 0.1rem solid #ccc;
			h2 {
				font-size: 2.5rem;
			}
			p {
				padding: 0rem;
			}
		}
	}
`;
