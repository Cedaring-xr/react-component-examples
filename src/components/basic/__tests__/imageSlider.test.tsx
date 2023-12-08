import { render, screen, cleanup, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import ImageSlider from '../ImageSlider'

describe('Image Slider component functionality', () => {
	describe('main functionality', () => {
		afterEach(() => {
			cleanup()
		})
		it('should render the component', () => {
			render(<ImageSlider />)
			const headerElement = screen.getByRole('heading', { level: 2 })
			expect(headerElement).toBeInTheDocument()
			expect(headerElement).toHaveTextContent('Image Carousel')
		})
		it.todo('should display the first image in the list upon first rendering')
		it.todo('should display the next image in the list when clicking on the next button')
		it.todo('should display the previous image in the list when clicking the previous button')
		it.todo('should wrap to the begging of the image list when clicking next on the last image')
		it.todo('should wrap to the end of the list when clicking previous on the first image')
		it.todo(
			'should navigate to a specific image in the list when clicking on the dots corresponding to that image in the dot navigation section'
		)
	})
})
