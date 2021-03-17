import styled from 'styled-components';
import Layout from '../components/layout/layout';
import * as GS from '../styles/global';
import Hero from '../components/hero';
import Link from 'next/link';

export default function Assets() {
	return (
		<>
			<Layout>
				<Hero message={'Assets/Service Offering'} background={`url('/ftgu-assets.webp')`} />
				<GS.MaxContainer>
					<Grid>
						<div>
							<img src={'/assets/ftgu-adobe.jpg'} alt="Adobe Creative Cloud" />
							<div>
								<div className="container">
									<h2>Design Anything Imaginable</h2>
									<p>
										From creating designs to marketing your brand, do it all creatively
										with Adobe. The tools offered under their cloud subscription are
										unparalleled and remain the industry standard for artists and
										entrepreneurs.
									</p>
									<Link passHref href="http://bit.ly/Creative-Cloud1">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-apliiq.jpg'} alt="Apliiq" />
							<div>
								<div className="container">
									<h2>Fully Branded Print On Demand</h2>
									<p>
										Not your everyday print on demand company, Apliiq takes dropshipping
										one step further and allows you to fully customize your brand. Best of
										all their app is on Shopify and allows you to easily connect your
										store and start taking orders.
									</p>
									<Link passHref href="http://bit.ly/Apliiq-Made-To-Order">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-bella-canvas.jpg'} alt="Bella Canvas" />
							<div>
								<div className="container">
									<h2>Quality Wholesale Apparel</h2>
									<p>
										For years Bella + Canvas has quietly provided quality wholesale blanks
										to brands around the world. Now customers are becoming aware, and best
										of all their products are ethically and sustainably made.
									</p>
									<Link passHref href="http://bit.ly/2TnwtBB">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-bluehost.jpg'} alt="Bluehost" />
							<div>
								<div className="container">
									<h2>Host A Website On A Budget</h2>
									<p>
										One of the largest web hosting providers in the world. Bluehost allows
										you to economically reserve a domain name, or launch a Wordpress
										eCommerce store with them.
									</p>
									<Link passHref href="http://www.bluehost.com/track/bluejay90">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-deep-setinel.jpg'} alt="Deep Sentinel" />
							<div>
								<div className="container">
									<h2>Secure Your Location With AI</h2>
									<p>
										Powered by artificial intelligence, Deep Sentinel is a security guard
										that is on call 24/7 while you’re away from your business. They
										interact with people at the door, and help deter crime.
									</p>
									<GS.MainButton target="_blank">Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-envato.jpg'} alt="Envato Element" />
							<div>
								<div className="container">
									<h2>Market Your Brand With Unlimited Digital Assets</h2>
									<p>
										Unlimited subscription service for digital assets which help you
										create the marketing you need for your business. From music, to
										graphics, and motion templates for video editing. Envato makes it easy
										to expand your reach online.
									</p>
									<Link passHref href="http://bit.ly/Envato-Themeforest">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-fiverr.jpg'} alt="Fiverr" />
							<div>
								<div className="container">
									<h2>Hire Freelancers For $5</h2>
									<p>
										For just $5 dollars you can get almost anything made! From logos,
										videos, graphic design, business cards and much more. If you’re
										willing to pay more you can work with vetted freelancers who can help
										take your brand to the next level.
									</p>
									<Link passHref href="http://tracking.fiverr.com/SH1rz">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-heatpress-nation.jpg'} alt="Heatpress Nation" />
							<div>
								<div className="container">
									<h2>Heat Transfer Printing Supplies</h2>
									<p>
										A leader in heat press equipment and supplies. Your one stop shop for
										making your own custom apparel on a budget.
									</p>
									<Link passHref href=" https://shrsl.com/2bpf2">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-nevada-grow.jpg'} alt="Nevada Grow" />
							<div>
								<div className="container">
									<h2>Business Development Assistance</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
										blanditiis, dolore ea eligendi quis explicabo officiis ratione veniam
										maxime quod consectetur maiores nam atque. Dicta tenetur consectetur
										non ipsum voluptas?
									</p>
									<Link passHref href="https://bit.ly/Nevada-Grow">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-omniprint.jpg'} alt="Omniprint" />
							<div>
								<div className="container">
									<h2>Direct To Garment Printers</h2>
									<p>
										Direct To Garment Printer manufacturer, OmniPrint is powering
										thousands of brands and allowing entrepreneurs to start a t-shirt
										printing business easily.
									</p>
									<Link passHref href="http://bit.ly/About-Omni-DTG​">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-placeit.jpg'} alt="Placeit" />
							<div>
								<div className="container">
									<h2>Market Your Brand Easily</h2>
									<p>
										Quality templates to help you create mockups of your t-shirt and
										product designs. You no longer have to be a master of photoshop.
										Simply take your graphic and customize it on Placeit and share it with
										the world.
									</p>
									<Link passHref href="https://bit.ly/Get-Placeit ">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-rocket-lawyer.jpg'} alt="Rocket Lawyer" />
							<div>
								<div className="container">
									<h2>Protect Your Ass-ets</h2>
									<p>
										Making contracts and legal work easy to understand. Rocketlawyer
										empowers millions of small to midsize businesses with the tools they
										need to be legally protected. All at a low cost when compared to
										hiring an attorney.
									</p>
									<Link passHref href="http://bit.ly/RocketLaw-LLC">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-sba.jpg'} alt="SBA.gov" />
							<div>
								<div className="container">
									<h2>Helping Small Businesses Succeed</h2>
									<p>
										The Small Business Administration operates around the USA and provides
										training and assistance for free to low cost. Contact a chapter in
										your city and set up a meeting to help develop your business idea.
									</p>
									<Link passHref href="http://bit.ly/SBA-Gov">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-shopify.jpg'} alt="Shopify" />
							<div>
								<div className="container">
									<h2>Build An Online Store</h2>
									<p>
										An eCommerce platform that powers over 1M businesses around the world.
										Shopify not only allows you to create a website, but it also provides
										you with the apps and services to grow your brand.
									</p>
									<Link passHref href="http://bit.ly/Get-Shopify">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-supacolor.jpg'} alt="Supacolor" />
							<div>
								<div className="container">
									<h2>Quick and Easy Full Color Transfers</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<GS.MainButton target="_blank">Learn More</GS.MainButton>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-uninet.jpg'} alt="Uninet" />
							<div>
								<div className="container">
									<h2>Leader In White Toner Transfer Printing</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
										provident eaque ullam labore facilis perspiciatis voluptatem eum ex
										rem enim.
									</p>
									<Link passHref href="http://bit.ly/Uninet-Printer">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-uninet.jpg'} alt="Uninet" />
							<div>
								<div className="container">
									<h2>From The Ground Up Academy</h2>
									<p>
										An online training platform for entrepreneurs that are building brands
										that impact the world. Access a library of content that is designed to
										help you navigate an industry and build a powerful brand.
									</p>
									<Link passHref href="http://bit.ly/GroundUp-Academy">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
								</div>
							</div>
						</div>
						<div>
							<img src={'/assets/ftgu-amazon.jpg'} alt="Amazon" />
							<div>
								<div className="container">
									<h2>Storefront For Entrepreneurs</h2>
									<p>
										Our curated storefront with the items you need to build your digital
										brand. From equipment for your office, to hard drive for storage and
										much more.
									</p>
									<Link passHref href="https://www.amazon.com/shop/jaycashofficial">
										<GS.MainButton target="_blank">Learn More</GS.MainButton>
									</Link>
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
	padding: 5rem 0rem;
	grid-gap: 5rem;
	grid-auto-rows: 0fr;
	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 640px) {
		display: block;
		div {
			margin: 0rem 0rem 3rem 0rem;
		}
	}
	& > div {
		border: 0.1rem solid #ccc;
		position: relative;
		a {
			font-size: 1.7rem;
			bottom: -1.5rem;
			position: absolute;
			transform: translate(-50%, -50%);
		}
		img {
			display: block;
			width: 100%;
			height: 26rem;
			object-fit: cover;
			box-sizing: border-box;
			border-bottom: 0.1rem solid #ccc;
		}
		.container {
			padding: 1.5rem 2.5rem 8.5rem 2.5rem;
			text-align: center;
			h2 {
				font-size: 2.5rem;
			}
			p {
				padding: 0rem;
			}
		}
	}
`;
