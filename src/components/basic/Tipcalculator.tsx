import { useState } from 'react'

export default function Tipcalculator() {
	const [tipPercent, setTipPercent] = useState('10')
	const [billAmount, setBillAmount] = useState(0)
	const [total, setTotal] = useState(0)

	const calculateTip = (e: any) => {
		setBillAmount(Number(e.target.value))
		// take bill amount if more than 0
		if (billAmount > 0) {
			const tip = billAmount * (Number(tipPercent) / 100)
			const total = billAmount + tip
			setTotal(total)
		}
	}

	return (
		<section className="component">
			<h2 className="component-title">Tip calulator</h2>
			<div className="flex flex-col w-[200px]">
				<label htmlFor="percent">Set Tip Percentage</label>
				<div>
					<input
						name="percent"
						type="range"
						min="5"
						max="25"
						className=""
						value={tipPercent}
						onChange={(e) => setTipPercent(e.target.value)}
					/>
					<span className="m-2">{tipPercent}%</span>
				</div>

				<label htmlFor="amount">Add Tip Amount</label>
				<input type="number" value={billAmount} onChange={calculateTip} />
				<div className=" m-4 border-content border-2 p-1">
					<h3 className="float-left">Bill: </h3>
					<p className="float-right">{total}</p>
					<br />
					<h3 className="float-left">Tip Amount: </h3>
					<p className="float-right">{tipPercent}</p>
					<br />
					<div className="border-b-2 border-black my-2"></div>
					<h3 className="float-left">Toal: </h3>
					<p className="float-right">{total}</p>
				</div>
				<button className="button">Clear</button>
			</div>
		</section>
	)
}
