import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./AdDesigner.css";

function AdDesigner() {
	const [ad, setAd] = useState("Chocolate");
    
    const [theme, setTheme] = useState("Light");

	const [font, setFont] = useState(70);

	const styles = { fontSize: font };

	return (
		<div className="AdDesigner">
			<div className="roomyParent">
				<Card>
				<Card.Body className={theme === "Light" ? "light" : "dark"}>
					<Card.Title>Vote for</Card.Title>
				<Card.Subtitle className="mb-2 voteFor" style={styles}>
							{ad}
				</Card.Subtitle>
			</Card.Body>
				</Card>
			</div>
			<div className="nonAd">
				<h2 className="mainPage">What to Support</h2>
				<div className="supportButtons">
					<Button
						disabled={ad === "Chocolate"}
						variant=""
						onClick={() => {
							setAd("Chocolate");
						}}
					>
						Chocolate
					</Button>
					<Button
						disabled={ad === "Vanilla"}
						variant=""
						onClick={() => {
							setAd("Vanilla");
						}}
					>
						Vanilla
					</Button>
					<Button
						disabled={ad === "Strawberry"}
						variant=""
						onClick={() => {
							setAd("Strawberry");
						}}
					>
						Strawberry
					</Button>
				</div>

				<h2 className="mt-3">Color Theme</h2>
				<div className="supportButtons">
					<Button
						disabled={theme === "Light"}
						variant=""
						onClick={() => {
							setTheme("Light");
						}}
					>
						Light
					</Button>
					<Button
						disabled={theme === "Dark"}
						variant=""
						onClick={() => {
							setTheme("Dark");
						}}
					>
						Dark
					</Button>
				</div>

				<h2 className="mt-3">Font Size</h2>
				<div className="supportButttons">
					<Button
						disabled={font === 0}
						variant = ""
						onClick={() => {
							setFont((prv) => prv - 1);
						}}
					>
						Down
					</Button>
					<span className="fontSize">{font.toString().padStart(3, "0")}</span>
					<Button
						disabled={font === 200}
						variant=""
						onClick={() => {
							setFont((prv) => prv + 1);
						}}
					>
						&nbsp;Up&nbsp;
					</Button>
				</div>
			</div>
		</div>
	);
}

export default AdDesigner;