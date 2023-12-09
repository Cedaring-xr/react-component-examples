import { useState } from 'react'
import TodoNav from './TodoNav'
import InputTodo from './InputTodo'
import TodoItem from './TodoItem'

const initialTodos = [
	{ id: 1, title: 'todo task 1', completed: false },
	{ id: 2, title: 'todo task 2', completed: false },
	{ id: 3, title: 'task 3', completed: true }
]

type singleTodo = {
	id: number
	title: string
	completed: boolean
}

const TodoList = () => {
	const [todos, setTodos] = useState<singleTodo[]>(initialTodos)

	function handleAddTodo(newTodo: singleTodo) {
		setTodos((todos) => [...todos, newTodo])
	}

	const handleClearTodos = () => {
		console.log('clear')
	}

	const handleSortTodos = () => {}

	return (
		<section className="component">
			<h2 className="component-title">Simple Todo Form</h2>
			<InputTodo onAddTodo={handleAddTodo} />
			<div className="m-2">
				{todos.map((item) => (
					<TodoItem todo={item} />
				))}
			</div>

			<TodoNav />
		</section>
	)
}

export default TodoList
