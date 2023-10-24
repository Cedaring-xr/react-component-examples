import { useState } from 'react'

export default function Keypad() {
	const [generated, setGenerated] = useState<any>(null)
	const [inputCode, setInputCode] = useState<number[]>([])
	const [outputText, setOutputText] = useState<string>('')

	// const numList = Array.from(Array(10).keys())
	const numList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

	const newCode = () => {
		let numArray = []
		for (let i = 0; i < 4; i++) {
			const num = Math.floor(Math.random() * 10)
			numArray.push(num)
		}
		const code = numArray.map(Number)
		setGenerated(code)
	}

	const inputNumber = (number: number) => {
		if (inputCode.length < 4) {
			setInputCode((arr) => [...arr, number])
		}
	}

	const clearInput = () => {
		setInputCode([])
		setOutputText('')
	}

	const submitCode = () => {
		if (inputCode.length === 4) {
			matchInput(inputCode)
			setInputCode([])
		}
	}

	const matchInput = (inputCode: number[]) => {
		if (JSON.stringify(inputCode) === JSON.stringify(generated)) {
			//comparing arrays in js is weird
			setOutputText('Successful code entered')
		} else {
			setOutputText('Incorrect code entered')
		}
	}

	return (
		<section className="component">
			<div>
				<h2 id="keypad" className="component-title">
					Basic Keypad Code Input
				</h2>
			</div>
			<div className="">
				<button className="button ml-0" onClick={newCode}>
					Generate New Code
				</button>
				<button className="button" onClick={() => setGenerated('')}>
					Clear Generated Code
				</button>
				<button className="button" onClick={clearInput}>
					Clear Input Code
				</button>
				<div className="">
					<p>generated code is: {generated}</p>
					<p>Input code is: {inputCode}</p>
				</div>
				<ul className="grid grid-cols-3 max-w-[200px] border-2 border-content rounded-xl p-2 mt-2">
					{numList.map((number, index) => {
						return (
							<li key={index} className="last:col-start-2 justify-self-center">
								<button
									className="grid-item border-[1px] px-2 pt-1 m-1 border-black w-[30px] h-[30px] text-black font-bold rounded-md  bg-stone-300"
									onClick={() => inputNumber(number)}
								>
									{number}
								</button>
							</li>
						)
					})}
				</ul>
				<h3
					className={`text-content font-bold text-2xl ${
						outputText === 'Incorrect code entered' ? 'text-red-500' : 'text-emerald-600'
					}`}
				>
					{outputText}
				</h3>
				<button className="button" onClick={submitCode}>
					Submit Code
				</button>
			</div>
		</section>
	)
}
