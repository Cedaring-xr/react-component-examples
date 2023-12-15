import { useState } from 'react'

const flashCardData = {
	question: 'What are the basic JavaScript data types?'
}

export default function Flashcards() {
	const [showAnswer, setShowAnswer] = useState(false)
	const [activeCard, setActiveCard] = useState(0) //loop through array of cards
	const [form, setForm] = useState({ question: '', answer: '' })

	const cardList = []

	const handleCardChange = (e: any): void => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const createNewCard = () => {}

	return (
		<section className="component">
			<h2 className="component-title">Simple flashcards</h2>
			<div>
				<p>Create new Card</p>
				<form action="">
					<input type="text" name="question" className="textInput" onChange={handleCardChange} />
					<input type="text" name="answer" className="textInput" onChange={handleCardChange} />
				</form>
				<button className="button" onClick={createNewCard}></button>
			</div>
			<div id="cards-container">
				<div id="card"></div>
			</div>
		</section>
	)
}
