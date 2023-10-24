import React from 'react'

type TabsProps = {
	name: string
}

const Tab: React.FC<TabsProps> = ({ name }) => {
	return (
		<div>
			<div>{name}</div>
		</div>
	)
}

export default Tab
