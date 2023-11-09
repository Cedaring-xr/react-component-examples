import React, { useState } from 'react'
import { TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti'

type SliderProps = {
	beforeImage: string
	afterImage: string
}

const ComparisonSlider: React.FC<SliderProps> = ({ beforeImage, afterImage }) => {
	const [percent, setPercent] = useState<string>('50')
	const [sliderPosition, setSliderPosition] = useState(50) //percentage of slider line between images
	const [isDragging, setIsDragging] = useState(false)

	const handleDrag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (!isDragging) return
		const rect = e.currentTarget.getBoundingClientRect()
		const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))
		const percent: number = Math.max(0, Math.min((y / rect.height) * 100, 100))
		if (percent < 2) {
			setSliderPosition(2)
		} else if (percent > 98) {
			setSliderPosition(98)
		} else {
			setSliderPosition(percent)
		}
		const elevationPercent = (100 - percent).toFixed()
		setPercent(elevationPercent)
	}
	const handleMouseDown = () => {
		setIsDragging(true)
	}
	const handleMouseUp = () => {
		setIsDragging(false)
	}
	const handleTouchStart = () => {
		setIsDragging(true)
	}
	const handleTouchEnd = () => {
		setIsDragging(false)
	}
	return (
		<div className="component h-[480px] p-4">
			<h2 className="component-title">Image Comparison slider</h2>
			<div
				id="slider-container"
				className="relative flex"
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onTouchEnd={handleTouchEnd}
			>
				<div
					id="image-container"
					className="relative w-[400px] overflow-hidden border-4 border-slate-900"
					onMouseDown={handleMouseDown}
					onTouchStart={handleTouchStart}
					onMouseMove={handleDrag}
				>
					<img id="before-image" src={beforeImage} alt="black and white version of mountain slider image" />
					<div
						className="absolute w-full top-0"
						style={{ clipPath: `inset(0 0 ${100 - sliderPosition}%  0)` }}
					>
						<img id="after-image" src={afterImage} alt="color version of mountain slider image" />
					</div>
					<div
						className="absolute top-0 h-1 w-full bg-white cursor-pointer"
						style={{ top: `calc(${sliderPosition}% - 1px)` }}
					>
						<div
							id="slider-line"
							className="w-[50px] h-[50px] rounded-full border-4 border-white mx-auto -my-6 flex flex-col justify-center items-center bg-zinc-900"
						>
							<TiArrowDownThick className="text-white text-2xl" />
							<TiArrowUpThick className="text-white text-2xl" />
						</div>
					</div>
				</div>
				<div id="range-slider-container" className="px-4 overflow-hidden flex justify-center">
					<div className="w-4 h-full bg-sky-100 border-2 border-black rounded-full">
						<div
							className="w-3 h-3 bg-black rounded-full absolute"
							style={{ top: `calc(${sliderPosition}% - 5px)` }}
						></div>
					</div>
					<span
						className="absolute left-[460px] font-bold"
						style={{ top: `calc(${sliderPosition}% - 10px)` }}
					>
						{percent}%
					</span>
				</div>
			</div>
		</div>
	)
}

export default ComparisonSlider
