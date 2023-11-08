import { render, screen, cleanup, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import StarRating from '../StarRating'

describe('StarRating component functionality', () => {
	describe('main functionality', () => {
		afterEach(() => {
			cleanup()
		})
		it('should render the component', () => {
			render(<StarRating />)
			const headerElement = screen.getByRole('heading', { level: 2 })
			expect(headerElement).toBeInTheDocument()
			expect(headerElement).toHaveTextContent('Star Rating Feedback')
		})

		it('should render with option of 5 stars', () => {
			render(<StarRating />)
			const starElements = screen.getAllByRole('listitem')
			expect(starElements).toHaveLength(5)
		})

		it('should have an initial starting point of 0 stars', () => {
			render(<StarRating />)
			const ratingOutputElement = screen.getByText('current rating:', { exact: false })
			expect(ratingOutputElement).toHaveTextContent('0 stars')
		})

		it.todo('should have in itial starting point of black stars')
		it.todo('should change state on mouse hover')

		it('should set star rating on mouse click', async () => {
			user.setup()
			render(<StarRating />)
			const ratingOutputElement = screen.getByText('current rating:', { exact: false })
			const starElements = screen.getAllByRole('listitem')
			act(() => {
				user.click(starElements[2])
			})
			await waitFor(() => {
				expect(ratingOutputElement).toHaveTextContent('current rating: 3 stars')
			})
		})

		it.todo('should be able to clear star rating back to 0 when clear button is clicked')
	})

	describe('edge case functionality', () => {
		afterEach(() => {
			cleanup()
		})

		it.todo('should be able to change star rating on re-click')
		it.todo('should not be able to go above 5 stars')
	})
})
