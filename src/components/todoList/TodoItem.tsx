import { useState } from 'react'

export default function TodoItem({ todo }: any) {
	const [isCompleted, setIsCompleted] = useState(false)

	return (
		<div className="flex flex-row">
			<input type="checkbox" value={todo.completed} onChange={() => setIsCompleted(!isCompleted)} />
			<h3>{todo.title}</h3>
		</div>
	)
}
