import React, { useRef } from 'react'
import Todo from './Todo'

const TodoList = () => {
	const todos = [
		{ id: 1, title: 'todo task 1', completed: false },
		{ id: 2, title: 'todo task 2', completed: false },
		{ id: 3, title: 'task 3', completed: true }
	]

	const todoName = useRef<HTMLInputElement | null>(null)

	// pass down functions too?
	function handleAddTodo() {
		console.log('add')
	}

	const handleClearTodos = () => {
		console.log('clear')
	}

	return (
		<section>
			<div>
				<h3>Item Todo list simple version</h3>
			</div>
			<input type="text" ref={todoName} />
			<button className="button" onClick={handleAddTodo}>
				Add Todo
			</button>
			<button className="button" onClick={handleClearTodos}>
				Clear Completed Todos
			</button>
			{todos.map((todo) => {
				return <Todo key={todo.id} id={todo.id} text={todo.title} />
			})}
		</section>
	)
}

export default TodoList
