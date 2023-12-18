import { useState } from 'react'

type FlashCard = {
	id: number
	question: string
	answer: string
}

const flashCardPlaceholder = [
	{
		id: 1,
		question: 'What are the basic JavaScript data types?',
		answer: 'string, number, boolean, symbol, object, null, undefined, bigInt'
	},
	{
		id: 2,
		question: 'JavaScript is an asynchronous language. True or False?',
		answer: 'Fasle it is sychronous, but has the ability to run code asychonously for certain cercumstances'
	},
	{
		id: 3,
		question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi?',
		answer: 'Lorem ipsum dolor sit amet.'
	}
]

export default function Flashcards() {
	const [form, setForm] = useState({ question: '', answer: '' })
	const [activeCard, setActiveCard] = useState(1)
	const [cardList, setCardList] = useState<FlashCard[]>(flashCardPlaceholder)

	const handleCardChange = (e: any): void => {
		setForm({
			...form,
			[e.target.name]: e.target.value //update the form object instead of creating individual state
		})
	}

	const createNewCard = () => {
		const newCardItem = {
			id: cardList.length + 1,
			question: form.question,
			answer: form.answer
		}

		if (!form.question || !form.answer) return
		setCardList((prevCardList) => [...prevCardList, newCardItem])
		setForm({ question: '', answer: '' })
		setActiveCard(cardList.length + 1)
	}

	const handlePrevCard = () => {
		if (activeCard === 1) setActiveCard(() => cardList.length)
		else {
			setActiveCard(() => activeCard - 1)
		}
	}

	const handleNextCard = () => {
		if (activeCard === cardList.length) {
			setActiveCard(() => 1)
		} else {
			setActiveCard(() => activeCard + 1)
		}
	}

	return (
		<section className="component h-[600px]">
			<h2 className="component-title">Simple flashcards</h2>
			<div className="w-[250px] border-2 border-content rounded-xl my-4 p-2">
				<p className="text-center font-bold">Create new flashcard</p>
				<form action="" className="flex flex-col">
					<label htmlFor="question">Question</label>
					<input
						type="text"
						name="question"
						className="textInput"
						onChange={handleCardChange}
						value={form.question}
						required
					/>
					<label htmlFor="answer">Answer</label>
					<input
						type="text"
						name="answer"
						className="textInput"
						onChange={handleCardChange}
						value={form.answer}
						required
					/>
				</form>
				<button className="button" onClick={createNewCard}>
					Add New Flashcard
				</button>
			</div>
			<div
				id="cards-container"
				className="relative border-2 rounded-xl border-black w-[500px] h-[250px] overflow-hidden bg-slate-500"
			>
				<p className="text-center">
					{activeCard} / {cardList.length}
				</p>
				<button className="button absolute left-0 top-[110px]" onClick={handlePrevCard}>
					Prev
				</button>
				{cardList.map((card) => (
					<>
						<Flashcard
							cardFront={card.question}
							cardBack={card.answer}
							activeCard={activeCard}
							card={card}
						/>
					</>
				))}

				<button className="button absolute right-0 top-[110px]" onClick={handleNextCard}>
					Next
				</button>
			</div>
		</section>
	)
}

const Flashcard = ({ cardFront, cardBack, card, activeCard }: any) => {
	return (
		<div id="card" className={card.id === activeCard ? 'card active-card' : 'card'}>
			<p className="card-front">
				<h4 className="text-center my-8 mx-4">{cardFront}</h4>
			</p>
			<p className="card-back">
				<h4 className="text-center my-8 mx-4">{cardBack}</h4>
			</p>
		</div>
	)
}
