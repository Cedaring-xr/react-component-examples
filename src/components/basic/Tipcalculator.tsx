import { useState } from 'react'

export default function Tipcalculator() {
	const [tipPercent, setTipPercent] = useState('10')
	const [billAmount, setBillAmount] = useState('')

	let tipAmount: string = (Number(billAmount) * (Number(tipPercent) / 100)).toFixed(2)
	let total: string = (Number(billAmount) + Number(tipAmount)).toFixed(2)

	return (
		<section className="component">
			<h2 className="component-title">Tip Calulator</h2>
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

				<label htmlFor="amount">Input Bill Amount</label>
				<input
					type="text"
					value={billAmount}
					onChange={(e) => setBillAmount(e.target.value.replace(/[^0-9.]/g, ''))}
					className="border-content border-2 rounded-lg px-1"
				/>
				<div className=" m-4 border-content border-2 p-1">
					<h3 className="float-left">Bill: </h3>
					<p className="float-right">${billAmount}</p>
					<br />
					<h3 className="float-left">Tip Amount: </h3>
					<p className="float-right">${tipAmount}</p>
					<br />
					<div className="border-b-2 border-black my-2"></div>
					<h3 className="float-left">Toal: </h3>
					<p className="float-right">${total}</p>
				</div>
				<button className="button" onClick={() => setBillAmount('')}>
					Clear
				</button>
			</div>
		</section>
	)
}
