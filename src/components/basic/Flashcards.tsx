import { useState } from 'react'

const flashCardData = {
	question: 'What are the basic JavaScript data types?'
}

export default function Flashcards() {
	const [showAnswer, setShowAnswer] = useState(false)
	const [activeCard, setActiveCard] = useState(0) //loop through array of cards
	const [form, setForm] = useState({ question: '', answer: '' })
	const [cardList, setCardList] = useState([])

	const flashcardList = []

	const handleCardChange = (e: any): void => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const createNewCard = () => {}

	return (
		<section className="component h-[600px]">
			<h2 className="component-title">Simple flashcards</h2>
			<div className="w-[300px]">
				<p>Create new Card</p>
				<form action="" className="">
					<input type="text" name="question" className="textInput" onChange={handleCardChange} />
					<input type="text" name="answer" className="textInput" onChange={handleCardChange} />
				</form>
				<button className="button" onClick={createNewCard}>
					Add New Flashcard
				</button>
			</div>
			<div id="cards-container" className="relative">
				<Flashcard cardFront="Question for Flash card" cardBack="Answer to Flash card" />
			</div>
		</section>
	)
}

const Flashcard = ({ cardFront, cardBack }: any) => {
	return (
		<div id="card" className="card">
			<p className="card-front">
				<h4 className="text-center my-8">{cardFront}</h4>
			</p>
			<p className="card-back">
				<h4 className="text-center my-8">{cardBack}</h4>
			</p>
		</div>
	)
}
