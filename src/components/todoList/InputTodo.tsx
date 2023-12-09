import { useState } from 'react'

type Props = {
	onAddTodo: any
}

export default function InputTodo({ onAddTodo }: Props) {
	const [todoTitle, setTodoTitle] = useState('')

	const handleAddTodo = () => {
		const newTodo = {
			id: Date.now(),
			title: todoTitle,
			completed: false
		}

		// call add function passed down
		onAddTodo(newTodo)

		// reset input field after add
		setTodoTitle('')
	}

	return (
		<div>
			<input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
			<button className="button" onClick={handleAddTodo}>
				Add Todo
			</button>
		</div>
	)
}
