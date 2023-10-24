import React from 'react'

type TodoProps = {
	id: number
	text: string
}

const Todo: React.FC<TodoProps> = ({ id, text }) => {
	return <div data-testid={`todo-${id}`}>{text}</div>
}

export default Todo
