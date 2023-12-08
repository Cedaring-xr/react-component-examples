import { useState } from 'react'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'

// TODO: focus functionality with clicking and tabs, title of text matching menu item
export default function SideMenu() {
	const [menu, setMenu] = useState<boolean>(false)
	const [focus, setFocus] = useState<number>(0)

	const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

	const toggleOpen = () => {
		setMenu(!menu)
		setFocus(0)
	}

	const itemFocus = (index: number) => {
		setFocus(index)
		// if (focus === index) {
		// 	isActive && ''
		// }
	}

	return (
		<section className="component min-h-[300px]">
			<h2 className="component-title text-rgb">Slide Menu</h2>
			<div className="flex flex-row mb-4 relative left-0">
				<div className="bg-bkg rounded-r-lg min-h-[250px] max-h-[250px] w-fit border-2 border-stone-600">
					{!menu ? (
						<BsFillArrowRightSquareFill className="text-3xl hover:text-4xl" onClick={toggleOpen} />
					) : (
						<BsFillArrowLeftSquareFill
							className="text-3xl hover:text-4xl float-right"
							onClick={toggleOpen}
						/>
					)}
					{menu ? (
						<ul className=" p-1 w-[80px] border-2 border-text-content mt-8 text-center">
							{items.map((item, index) => (
								<li
									key={index}
									onClick={() => itemFocus(index)}
									className="underline pb-4 focus:bg-slate-400 cursor-pointer"
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
					<div className="mx-8 p-4 border-2 border-content rounded-xl w-3/4">
						{items.map((item, index) => (
							<div key={index} className={`hidden`}>
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
