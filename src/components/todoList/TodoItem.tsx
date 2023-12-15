import { useState } from 'react'

type TodoProps = {
	todo: {
		id: number
		title: string
		completed: boolean
	}
}

export default function TodoItem({ todo }: TodoProps) {
	const [isCompleted, setIsCompleted] = useState(false)

	return (
		<div className="flex flex-row">
			<input type="checkbox" onChange={() => setIsCompleted(!isCompleted)} />
			<h3>{todo.title}</h3>
		</div>
	)
}
