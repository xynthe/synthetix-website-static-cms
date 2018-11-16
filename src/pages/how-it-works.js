import React from "react";
import "./how-it-works.sass";
import Layout from "../components/layout";
import "./how-it-works.sass";
import icoPlay from "../resources/ico-play.svg";
import icoPlayDark from "../resources/ico-play-dark.svg";
import icoLock from "../resources/ico-lock.svg";
import icoCoins from "../resources/ico-coins.svg";
import icoHandout from "../resources/ico-handout.svg";
import Modal from "../components/Modal";
import Player from "@vimeo/player";
const HOW_IT_WORKS = "howItWorks";
const HOW_NOMINS_ARE_MINTED = "howNominsAreMinted";

export default class HowItWorksPage extends React.Component {
	state = {
		isOpen: false,
		isMobile: false
	};

	howItWorks = null;
	howNominsAreMinted = null;

	startVideo(playerId) {
		this[playerId] = new Player(playerId, {
			id: playerId === HOW_IT_WORKS ? 254987969 : 287966988,
			width: 640
		});
		this[playerId].play();
	}

	pauseVideo(playerId) {
		if (this[playerId]) this[playerId].pause();
	}

	mobileCheck() {
		let check = false;
		(function(a) {
			if (
				/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
					a
				) ||
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
					a.substr(0, 4)
				)
			)
				check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}

	componentDidMount() {
		const isMobile = this.mobileCheck();
		this.setState({ isMobile: isMobile });
	}

	render() {
		let { isOpen, playerId, isMobile } = this.state;
		return (
			<Layout>
				<div className="how-it-works-page">
					<section className="section header-section">
						<div className="container">
							<h1 className="page-title">How It Works</h1>
							<div className="page-subtitle">
								There are two tokens in the Havven payment network: HAV, the collateral token, and
								nomins, our stablecoin.
							</div>
						</div>
						<div className="columns is-centered">
							<div className="column is-narrow has-text-centered">
								{!isMobile ? (
									<a
										href="javascript:void(0)"
										className="is-button is-blue is-subtle-alt"
										onClick={() => {
											this.setState({
												isOpen: true,
												playerId: HOW_IT_WORKS
											});
											this.startVideo(HOW_IT_WORKS);
										}}
									>
										<img src={icoPlay} className="is-icon" alt="Intro" /> Intro
									</a>
								) : (
									<a
										href="https://vimeo.com/254987969"
										target="_blank"
										className="is-button is-blue is-subtle-alt"
									>
										<img src={icoPlay} className="is-icon" alt="Intro" /> Intro
									</a>
								)}
							</div>
							<div className="column is-narrow has-text-centered">
								{!isMobile ? (
									<a
										href="javascript:void(0)"
										className="is-button is-white is-subtle-alt"
										onClick={() => {
											this.setState({
												isOpen: true,
												playerId: HOW_NOMINS_ARE_MINTED
											});
											this.startVideo(HOW_NOMINS_ARE_MINTED);
										}}
									>
										<img src={icoPlayDark} className="is-icon" alt="How nomins are minted" /> How
										nomins are minted
									</a>
								) : (
									<a
										href="https://vimeo.com/287966988"
										target="_blank"
										className="is-button is-white is-subtle-alt"
									>
										<img src={icoPlay} className="is-icon" alt="How nomins are minted" /> How nomins
										are minted
									</a>
								)}
							</div>
						</div>
					</section>
					<section className="section is-white steps-section">
						<div className="container step-1 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP ONE</div>
								<div className="step-title pb-40">Lock HAV as collateral</div>
								<div className="step-desc pb-50">
									HAV holders lock their HAV as collateral to back nomins, our stablecoin.
								</div>
								<img src={icoLock} alt="Step One" />
							</div>
						</div>
						<div className="container step-2 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP TWO</div>
								<div className="step-title pb-40">Mint stablecoins</div>
								<div className="step-desc pb-50">
									Nomins are minted into the market, where they can be used as a stable medium of
									exchange.
								</div>
								<img src={icoCoins} alt="Step Two" />
							</div>
						</div>
						<div className="container step-3 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP THREE</div>
								<div className="step-title pb-40">Receive reward as HAV holder</div>
								<div className="step-desc pb-50">
									Circulating nomins generate transaction fees that are distributed to HAV holders,
									rewarding them for providing stability.
								</div>
								<img src={icoHandout} alt="Step Three" />
							</div>
						</div>
					</section>
				</div>
				<Modal
					isOpen={isOpen && playerId === HOW_IT_WORKS}
					onRequestClose={() => {
						this.setState({ isOpen: false });
						this.pauseVideo(playerId);
					}}
					className="is-video"
				>
					<div data-vimeo-id="254987969" data-vimeo-width="840" id={HOW_IT_WORKS} />
				</Modal>
				<Modal
					isOpen={isOpen && playerId === HOW_NOMINS_ARE_MINTED}
					onRequestClose={() => {
						this.setState({ isOpen: false });
						this.pauseVideo(playerId);
					}}
					className="is-video"
				>
					<div data-vimeo-id="287966988" data-vimeo-width="840" id={HOW_NOMINS_ARE_MINTED} />
				</Modal>
			</Layout>
		);
	}
}
