import { useState } from 'react'

export default function DateSliderCounter() {
	const [count, setCount] = useState(0)
	const [steps, setSteps] = useState(1)

	const date = new Date()
	date.setDate(date.getDate() + count)

	const handleReset = () => {
		setCount(0)
		setSteps(1)
	}

	return (
		<section className="component">
			<h2 className="component-title">Date Slider Counter</h2>
			<div>
				<label htmlFor="step-range" className="mt-2 mx-4">
					Steps
				</label>
				<input
					type="range"
					name="step-range"
					min="0"
					max="10"
					value={steps}
					onChange={(e) => setSteps(Number(e.target.value))}
				/>
				<span>{steps}</span>
			</div>

			<label htmlFor="count" className="ml-32 font-bold">
				Count
			</label>
			<div className="flex flex-row">
				<button className="button" onClick={() => setCount(() => count - steps)}>
					-
				</button>
				<input
					name="count"
					className="border-2 border-black rounded-xl px-1 py-0"
					type="text"
					value={count}
					onChange={(e) => setCount(Number(e.target.value))}
				/>
				<button className="button" onClick={() => setCount(() => count + steps)}>
					+
				</button>
			</div>
			<p>
				{count === 0
					? 'today is '
					: count > 0
					? `${count} day${count === 1 ? '' : 's'} from today is `
					: `${Math.abs(count)} day${count === 1 ? '' : 's'} ago was `}
				{date.toDateString()}
			</p>
			{count !== 0 ? (
				<button className="button" onClick={handleReset}>
					Reset
				</button>
			) : null}
		</section>
	)
}
