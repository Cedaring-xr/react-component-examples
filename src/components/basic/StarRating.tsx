import { useState } from 'react'

const Star = ({ yellow }: any) => {
	return (
		<svg
			className={yellow ? 'fill-amber-500' : ''}
			height="50"
			width="50"
			clipRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
				fillRule="nonzero"
			/>
		</svg>
	)
}

export default function StarRating() {
	const [hoverIndex, setHoverIndex] = useState<number>(0)
	const [rating, setRating] = useState<number>(0)

	return (
		<section className="component">
			<h2 className="component-title">Star Rating Feedback</h2>
			<div>
				<div className="">
					<h3>Rate you experience</h3>
					<ul>
						{[1, 2, 3, 4, 5].map((index) => {
							return (
								<li
									className="list-none inline-block"
									key={index}
									onMouseEnter={() => setHoverIndex(index)}
									onMouseLeave={() => setHoverIndex(0)}
									onClick={() => setRating(index)}
								>
									<Star yellow={index <= hoverIndex || index <= rating} />
								</li>
							)
						})}
					</ul>
					<p className="p-4">{`current rating: ${rating} stars`}</p>
					<button className="button" onClick={() => setRating(0)}>
						Clear Rating
					</button>
				</div>
			</div>
		</section>
	)
}
