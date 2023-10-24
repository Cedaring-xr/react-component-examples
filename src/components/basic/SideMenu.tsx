import { useState } from 'react'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'

// TODO: focus functionality with clicking and tabs, title of text matching menu item
export default function SideMenu() {
	const [menu, setMenu] = useState<boolean>(false)
	const [focus, setfocus] = useState<string[]>([])

	const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

	const toggleOpen = () => {
		setMenu(!menu)
		// set focus to item 1 on open
		// setfocus(focus[0])
	}

	const itemFocus = (index: number) => {
		console.log('item focus ', index)
		// setfocus(index)
	}

	return (
		<section className="component min-h-[300px]">
			<h2 className="component-title text-rgb">Slide Menu</h2>
			<div className="flex flex-row mb-4 absolute left-0">
				<div
					className="bg-bkg rounded-r-lg min-h-[250px] max-h-[250px] w-fit border-2 border-stone-600"
					onClick={toggleOpen}
				>
					{!menu ? (
						<BsFillArrowRightSquareFill className="text-3xl hover:text-4xl" />
					) : (
						<BsFillArrowLeftSquareFill className="text-3xl hover:text-4xl float-right" />
					)}
					{menu ? (
						<ul className="p-4 border-2 border-text-content mt-10">
							{items.map((item, index) => (
								<li
									key={index}
									onClick={() => itemFocus(index)}
									className="underline pb-4 focus:bg-slate-400"
								>
									{item}
								</li>
							))}
						</ul>
					) : (
						''
					)}
				</div>
				{menu ? (
					<div className="mx-8 p-4 border-2 border-content rounded-xl">
						{items.map((item, index) => (
							<div key={index}>
								<h3>{item}</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id commodi
									molestiae ipsum nulla libero dolores sit perferendis inventore cumque.
								</p>
							</div>
						))}
					</div>
				) : (
					''
				)}
			</div>
		</section>
	)
}
