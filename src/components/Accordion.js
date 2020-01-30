import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.sass";

function Accordion(props) {
	const [setActive, setActiveState] = useState("");
	const [setHeight, setHeightState] = useState("0px");
	const [setRotate, setRotateState] = useState("accordion-icon");

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === "" ? "active" : "");
		setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
		setRotateState(setActive === "active" ? "accordion-icon" : "accordion-icon rotate");
		console.log(content.current.scrollHeight);
	}

	return (
		<div className="accordion-section no-select">
			<button className={`accordion ${setActive}`} onClick={toggleAccordion}>
				<div className="accordion-top">
					<p className="accordion-title">{props.title}</p>
					<Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
				</div>
				<div
					ref={content}
					style={{ maxHeight: `${setHeight}` }}
					className="accordion-content"
				>
					<div className="accordion-text">{props.content}</div>
				</div>
			</button>
		</div>
	);
}

export default Accordion;
