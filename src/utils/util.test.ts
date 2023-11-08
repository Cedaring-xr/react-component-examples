import { getStringInfo, toUpperCase } from './temp'

describe('utils functions tests', () => {
	it('should return upper case of a valid string', () => {
		// arrange
		const sut = toUpperCase // sut is string utils
		const expected = 'ASDF'

		//act
		const actual = toUpperCase('asdf')

		//assert
		expect(actual).toBe(expected)
	})

	it('should return info for a valid string', () => {
		const actual = getStringInfo('My-String')

		expect(actual.lowerCase).toBe('my-string')
		expect(actual.extraInfo).toStrictEqual({})
		expect(actual.characters).toHaveLength(9)
		expect(actual.characters).toContain<string>('M')
		expect(actual.characters).toEqual(expect.arrayContaining(['S', 't', 'M']))

		// same thing
		expect(actual.extraInfo).not.toBe(undefined)
		expect(actual.extraInfo).toBeDefined()
	})
})

// parameterized tests for when you have multiple use cases
describe('ToUpperCase examples', () => {
	it.each([
		{ input: 'asdf', expected: 'ASDF' },
		{ input: 'My-String', expected: 'MY-STRING' },
		{ input: 'ewqeF', expected: 'EWQEF' }
	])('$input toUpperCase should be $expected', ({ input, expected }) => {
		const actual = toUpperCase(input)
		expect(actual).toBe(expected)
	})
})
