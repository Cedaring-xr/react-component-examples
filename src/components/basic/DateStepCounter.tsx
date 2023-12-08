import { useState } from 'react'

export default function DateStepCounter() {
	const [stepNumber, setStepNumber] = useState(1)
	const [count, setCount] = useState(0)

	const date = new Date().getDate()

	const handleDate = () => {}

	const increaseSteps = () => {
		setStepNumber(() => stepNumber + 1)
	}

	const decreaseSteps = () => {
		if (stepNumber > 1) {
			setStepNumber(() => stepNumber - 1)
		}
	}

	return (
		<section className="component">
			<div className="flex flex-row">
				<button className="button" onClick={decreaseSteps}>
					-
				</button>
				<p>Steps: {stepNumber}</p>
				<button className="button" onClick={increaseSteps}>
					+
				</button>
			</div>
			<div className="flex flex-row">
				<button className="button">-</button>
				<p>Count: {count}</p>
				<button className="button">+</button>
			</div>
			<div>Today is {date}</div>
		</section>
	)
}
