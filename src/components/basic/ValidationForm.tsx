import { useState } from 'react'

type FormData = {
	name: string
	feedback: string
}

export default function ValidationForm() {
	const [name, setName] = useState('')
	const [feedback, setFeedback] = useState('')
	const [formData, setFormData] = useState<FormData | null>()

	const handleSubmit = (e: any) => {
		e.preventDefault()
		// save form values as output
		const newFeedback = {
			name: 'From: ' + name,
			feedback: 'Message: ' + feedback
		}
		if (!name || !feedback) return null
		setFormData(newFeedback)
		// reset form values
		setName('')
		setFeedback('')
	}

	const clearFormData = () => {
		setFormData(null)
	}

	return (
		<section className="component ">
			<h2 className="component-title">Simple Validation Form</h2>
			<div className="flex flex-col-2">
				<form onSubmit={handleSubmit} className="flex flex-col">
					<label htmlFor="Name" className="mx-auto">
						Name
					</label>
					<input
						type="text"
						placeholder="Name"
						className="input text-black"
						name="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
					<label htmlFor="feedback" className="mx-auto">
						Feedback
					</label>
					<textarea
						className="text-black resize p-1 rounded-md border-[1px] border-content"
						name="feedback"
						placeholder="Feedback paragraph"
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
					></textarea>
					<button className="button" type="submit">
						Submit
					</button>
				</form>
				<div className="border-2 border-black h-[200px] min-w-[500px] m-4 mx-8 rounded-lg">
					<p className="bg-content text-bkg m-0 px-1">Results</p>
					<p>{formData && formData.name}</p>
					<p>{formData && formData.feedback}</p>
				</div>
			</div>
			<button className="button" onClick={clearFormData}>
				Clear Feedback
			</button>
		</section>
	)
}
