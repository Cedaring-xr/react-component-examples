import { useState } from 'react'

interface TooltipProps {
	content: string
	children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className="relative">
			{children}
			{showTooltip && (
				<div className="tooltip bg-content text-bkg text-bold">
					{content}
					<span className="tooltip-arrow bg-content"></span>
				</div>
			)}
		</div>
	)
}

export default Tooltip
