import { useState } from 'react'

const TodoNav = () => {
	const [sortBy, setSortby] = useState('name')
	// pass down todo list from parent
	// derive state from the list passed down

	// create sort function
	const handleSortBy = () => {}

	return (
		<div className="mt-2">
			<label htmlFor="sortBy" className="mr-3">
				sort by:
			</label>
			<select name="sortBy" id="">
				<option value="name">Name</option>
				<option value="name">id</option>
				<option value="name">completed</option>
			</select>
			<button className="button">Clear Completed Todos</button>
		</div>
	)
}

export default TodoNav
