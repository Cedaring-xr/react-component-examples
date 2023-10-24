import { useState, useRef, ChangeEvent, MouseEvent, DragEvent } from 'react'
import { BsStack } from 'react-icons/bs'

type Items = {
	id: number
	name: string
}

const itemList: Items[] = [
	{
		id: 1,
		name: 'Item 1'
	},
	{
		id: 2,
		name: 'Item 2'
	},
	{
		id: 3,
		name: 'Item 3'
	}
]

export default function DragAndDrop() {
	const [draggableItems, setDraggableItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3'])
	const [inputValue, setInputValue] = useState<string>('')

	let draggingItem = useRef()
	let dragOver = useRef()

	const handleAddItem = (e: MouseEvent<HTMLButtonElement>, inputValue: string) => {
		//append new item onto draggable items list
		console.log('adding list item')
		e.preventDefault()
		setInputValue(inputValue)
		//add inputValue to draggable items list
		const newItem: Items = {
			id: draggableItems.length,
			name: inputValue
		}
		// setDraggableItems(draggableItems.push(newItem))
	}

	// const handleDrag = (e: DragEvent<HTMLDivElement>, index: number) => {
	// 	e.preventDefault()
	// 	console.log('drag start')
	// 	draggingItem = index
	// }

	// function handleDragOver(e: DragEvent<HTMLDivElement>, index: number) {
	// 	dragOver = index
	// }

	// function handleDrop(e: DragEvent<HTMLDivElement>, index: number) {}

	return (
		<section className="component">
			<h2 className="component-title">Drag re-order and add Stack</h2>
			<div className="">
				<input
					type="text"
					name="draggable-item-name"
					placeholder="add item"
					className="input"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className="button" onClick={(e) => handleAddItem(e, inputValue)}>
					Add Item
				</button>
			</div>
			<div className="flex flex-row">
				<div className="border-[1px] border-content p-1 m-1 w-[45%]">
					{draggableItems.map((item, index) => (
						<div
							key={index}
							className="draggable flex flex-row border-content border-2 m-2 py-4 rounded-md"
							draggable
							// onDragStart={(e) => handleDrag(e, index)}
							// onDragOver={(e) => handleDragOver(e, index)}
							// onDragEnd={(e) => handleDrop(e, index)}
						>
							<div>
								<BsStack className="text-2xl m-2" />
							</div>
							<p className="mt-2 text-content">{item}</p>
						</div>
					))}
				</div>
				<div className="border-[1px] border-content p-1 m-1 w-[45%]"></div>
			</div>
		</section>
	)
}
