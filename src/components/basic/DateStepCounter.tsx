import { useState } from 'react'

export default function DateStepCounter() {
	const [stepNumber, setStepNumber] = useState(1)
	const [count, setCount] = useState(0)

	const date = new Date()
	date.setDate(date.getDate() + count)

	const handleStepDecrease = () => {
		if (stepNumber > 1) {
			setStepNumber(() => stepNumber - 1)
		}
	}

	return (
		<section className="component">
			<div className="flex flex-row">
				<button className="button" onClick={handleStepDecrease}>
					-
				</button>
				<p>Steps: {stepNumber}</p>
				<button className="button" onClick={() => setStepNumber(() => stepNumber + 1)}>
					+
				</button>
			</div>
			<div className="flex flex-row">
				<button className="button" onClick={() => setCount(() => count - stepNumber)}>
					-
				</button>
				<p>Count: {count}</p>
				<button className="button" onClick={() => setCount(() => count + stepNumber)}>
					+
				</button>
			</div>
			<div>
				{count === 0
					? 'today is '
					: count > 0
					? `${count} day${count === 1 ? '' : 's'} from today is `
					: `${Math.abs(count)} day${count === 1 ? '' : 's'} ago was `}
				{date.toDateString()}
			</div>
		</section>
	)
}
