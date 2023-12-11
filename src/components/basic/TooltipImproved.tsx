import React from 'react'

type Props = {
	children: React.ReactNode
}

export default function TooltipImproved({ children }: Props) {
	return (
		<div className="tooltip bg-content text-bkg text-bold">
			{children}
			<span className="tooltip-arrow bg-content"></span>
		</div>
	)
}
