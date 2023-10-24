import { useState } from 'react'

export default function ToggleButtons() {
	const [isRed, toggleRed] = useState<boolean>(false)
	const [isGreen, toggleGreen] = useState<boolean>(false)
	const [isBlue, toggleBlue] = useState<boolean>(false)

	return (
		<section className="component pl-2">
			<h2 className="component-title">Simple Toggle Buttons</h2>
			<div className="flex flex-row gap-2">
				<button
					className={`w-36 h-16 border-2 border-black rounded-lg flex items-center ${
						isRed ? 'bg-red-800' : 'bg-red-300'
					}`}
					onClick={() => {
						toggleRed(!isRed)
					}}
				>
					<h4 className={`mx-auto ${isRed ? 'text-white' : 'text-black'}`}>
						{!isRed ? 'Light Red' : 'Dark Red'}
					</h4>
				</button>
				<button
					className={`w-36 h-16 border-2 border-black rounded-lg flex items-center ${
						isGreen ? 'bg-green-800' : 'bg-green-300'
					}`}
					onClick={() => {
						toggleGreen(!isGreen)
					}}
				>
					<h4 className={`mx-auto ${isGreen ? 'text-white' : 'text-black'}`}>
						{!isGreen ? 'Light Green' : 'Dark Green'}
					</h4>
				</button>
				<button
					className={`w-36 h-16 border-2 border-black rounded-lg flex items-center ${
						isBlue ? 'bg-blue-800' : 'bg-blue-300'
					}`}
					onClick={() => {
						toggleBlue(!isBlue)
					}}
				>
					<h4 className={`mx-auto ${isBlue ? 'text-white' : 'text-black'}`}>
						{!isBlue ? 'Light Blue' : 'Dark Blue'}
					</h4>
				</button>
			</div>
		</section>
	)
}
