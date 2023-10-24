import { useState, ChangeEvent } from 'react'

export default function ValidationForm() {
	const [name, setName] = useState<string>('')
	const [textInput, setTextInput] = useState<string>('')

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextInput(event.target.value)
	}

	const handleSubmit = () => {}

	return (
		<section className="component ">
			<h2 className="component-title">Simple Validation Form</h2>
			<div className="flex flex-col-2">
				<form onSubmit={() => handleSubmit()} className="flex flex-col">
					<label htmlFor="Name">Name Input Field</label>
					<input
						type="text"
						placeholder="Name"
						className="input text-black"
						name="Name"
						value={name}
						onChange={handleNameChange}
					></input>
					<label htmlFor="feedback">Feedback</label>
					<textarea
						className="text-black resize p-1 rounded-md"
						name="feedback"
						placeholder="Feedback paragraph"
						value={textInput}
						onChange={handleTextChange}
					></textarea>
					<button className="button" type="submit">
						Submit Form
					</button>
				</form>
				<div className="border-2 border-black bg-content h-[200px] min-w-[500px] m-4 mx-8 p-1 rounded-lg">
					<p className="text-bkg">Output of Form</p>
				</div>
			</div>
		</section>
	)
}
