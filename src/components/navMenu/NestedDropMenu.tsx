import { useState } from 'react'

// TODO: Move this entire component to the Nav Menu folder

type NavItem = {
	label: string
	subItems?: NavItem[] // Submenu items, if any
	nestedItems?: NavItem[]
}

export default function NestedDropMenu() {
	const [menuItems] = useState<NavItem[]>([
		{
			label: 'Home'
		},
		{
			label: 'Products',
			subItems: [
				{
					label: 'Product 1',
					nestedItems: [{ label: 'subProduct 1' }, { label: 'subProduct 2' }, { label: 'subProduct 3' }]
				},
				{ label: 'Product 2' },
				{ label: 'Product 3' }
			]
		},
		{
			label: 'Services',
			subItems: [{ label: 'Service 1' }, { label: 'Service 2' }]
		},
		{
			label: 'Contact'
		}
	])
	const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
	const [nestedMenu, setNestedMenu] = useState<string | null>(null)

	const handleSubMenuToggle = (label: string) => {
		if (openSubMenu === label) {
			setOpenSubMenu(null)
		}
		setOpenSubMenu(label)
	}

	const handleNestedMenuToggle = (label: string) => {
		if (nestedMenu === label) {
			setNestedMenu(null)
		}
		setNestedMenu(label)
	}

	return (
		<section className="component">
			<h2 className="component-title">Nested Drop Menu</h2>
			<nav className="w-full h-[40px]">
				<ul className="flex flex-row bg-slate-200 absolute h-[40px] gap-2">
					{menuItems.map((item, index) => (
						<li
							key={index}
							className="m-2 text-bkg p-2"
							onMouseEnter={() => handleSubMenuToggle(item.label)}
							onMouseLeave={() => handleSubMenuToggle(item.label)}
						>
							<span className={`bg-slate-300 ${item.subItems ? 'has-submenu' : ''}`}>{item.label}</span>
							{item.subItems && openSubMenu === item.label && (
								<ul className="bg-stone-100 p-3 border-[1px] border-black absolute">
									{item.subItems.map((subItem, subIndex) => (
										<li
											key={subIndex}
											onMouseEnter={() => handleSubMenuToggle(item.label)}
											onMouseLeave={() => handleNestedMenuToggle(item.label)}
										>
											{subItem.label}
											{item.subItems && nestedMenu === item.label && (
												<ul>
													<li>test</li>
												</ul>
											)}
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</nav>
			<div className="m-4 border-black h-[200px] w-full">
				<p>Output of Navbar</p>
			</div>
		</section>
	)
}
