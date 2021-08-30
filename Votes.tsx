import Button from "react-bootstrap/Button";
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Votes.css";

function Votes() {
	const [chocolateVotes, setChocolateVotes] = useState(0);
	const [strawberryVotes, setStrawberryVotes] = useState(0);
	const [vanillaVotes, setVanillaVotes] = useState(0);
	const [totalVotes, setTotalVotes] = useState(0);

	return (
		<div className="Votes nonAd">
			<h2 className="mt-3">Vote Here</h2>
			<div className="supportButtons mb-3">
				<Button
					disabled={totalVotes >= 100}
					variant="primary"
					onClick={() => {
						setChocolateVotes((prv) => prv + 1);
						setTotalVotes((prv) => prv + 1);
					}}
				>
					Chocolate
				</Button>
				<Button
					disabled={totalVotes >= 100}
					variant="success"
					onClick={() => {
						setVanillaVotes((prv) => prv + 1);
						setTotalVotes((prv) => prv + 1);
					}}
				>
					Vanilla
				</Button>
				<Button
					disabled={totalVotes >= 100}
					variant="secondary"
					onClick={() => {
						setStrawberryVotes((prv) => prv + 1);
						setTotalVotes((prv) => prv + 1);
					}}
				>
					Strawberry
				</Button>
			</div>
			<p>
				Chocolate:{" "}
				{chocolateVotes ? (
					<span>{((chocolateVotes / totalVotes) * 100).toFixed(1)}%</span>
				) : (
					<span>No Votes</span>
				)}
			</p>
			<ProgressBar striped now={chocolateVotes} className="chocolateBar" />
			<p>
				Vanilla:{" "}
				{vanillaVotes ? (
					<span>{((vanillaVotes / totalVotes) * 100).toFixed(1)}%</span>
				) : (
					"No Votes"
				)}
			</p>
			<ProgressBar striped now={vanillaVotes} className="vanillaBar" />
			<p>
				Strawberry:{" "}
				{strawberryVotes ? (
					<span>{((strawberryVotes / totalVotes) * 100).toFixed(1)}%</span>
				) : (
					"No Votes"
				)}
			</p>
			<ProgressBar striped now={strawberryVotes} className="strawberryBar" />
		</div>
	);
}

export default Votes;