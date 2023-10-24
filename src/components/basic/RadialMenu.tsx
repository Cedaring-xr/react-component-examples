import { useState } from 'react'

export default function RadialMenu() {
	const [menu, setMenu] = useState<boolean>(false)
	const [outputColor, setOutputColor] = useState<string>('bg-slate-200') //css color changes
	const [outputText, setOutputText] = useState<string>('')

	const run = () => {
		setMenu(!menu)
	}

	const handleClick = (color: string, text: string) => {
		setOutputColor(color)
		setOutputText(text)
	}

	const clearInput = () => {
		setOutputColor('bg-slate-200')
		setOutputText('')
	}

	return (
		<section className="component">
			<h2 className="component-title">Radial Hover Menu</h2>
			<div className="flex flex-row">
				<div className="w-[300px] h-[200px] bg-bkg border-[1px] border-content mb-4 flex align-middle items-center rounded-xl">
					<div
						className="hover-container w-[300px] h-[200px] group flex items-center justify-center"
						onMouseEnter={run}
						onMouseLeave={run}
					>
						<button className="radial-center-btn peer" onClick={() => clearInput()}>
							{menu ? `Cancel` : `Menu`}
						</button>
						<button
							className="radial-select-btn group-hover:translate-x-[60px] group-hover:translate-y-[-60px] bg-red-500 ease-in-out duration-300 hover:text-2xl hover:text-white"
							id="one"
							onClick={() => handleClick('bg-red-500', 'Red')}
						>
							One
						</button>
						<button
							className="radial-select-btn bg-teal-500 group-hover:translate-x-[110px] ease-in-out duration-300 delay-75 hover:text-2xl hover:text-white"
							id="two"
							onClick={() => handleClick('bg-teal-500', 'Teal')}
						>
							Two
						</button>
						<button
							className="radial-select-btn bg-pink-600 group-hover:translate-x-[60px] group-hover:translate-y-[60px] ease-in-out duration-300 delay-100 hover:text-2xl hover:text-white"
							id="three"
							onClick={() => handleClick('bg-pink-500', 'Pink')}
						>
							Three
						</button>
						<button
							className="radial-select-btn bg-yellow-500 group-hover:translate-x-[-60px] group-hover:translate-y-[60px] ease-in-out duration-300 delay-150 hover:text-2xl hover:text-white"
							id="four"
							onClick={() => handleClick('bg-yellow-500', 'Yellow')}
						>
							Four
						</button>
						<button
							className="radial-select-btn bg-blue-500 group-hover:translate-x-[-110px] ease-in-out duration-300 delay-200 hover:text-2xl hover:text-white"
							id="five"
							onClick={() => handleClick('bg-blue-500', 'Blue')}
						>
							Five
						</button>
						<button
							className="radial-select-btn bg-green-500 group-hover:translate-x-[-60px] group-hover:translate-y-[-60px] ease-in-out duration-500 delay-200 hover:text-2xl hover:text-white"
							id="six"
							onClick={() => handleClick('bg-green-500', 'Green')}
						>
							Six
						</button>
					</div>
				</div>
				<div
					className={`w-[250px] h-[150px] border-2 border-content p-8 rounded-lg m-8 flex justify-center ${
						outputColor ? outputColor : ''
					}`}
				>
					<h4 className="text-white text-2xl">{outputText}</h4>
				</div>
			</div>
		</section>
	)
}
