import { useState } from 'react'

type FormInputs = {
	firstName: string
	lastName: string
	email: string
	age: number
	addressOne: string
	addressTwo: string
	state: string
	zipcode: number
}

export default function ExpandedValidationForm() {
	const [form, setForm] = useState({})

	function handleFormSubmit() {}

	// use spread operator along with [e.target.name] to modify the state objects, instead of using e.target.value and different state variables.

	return (
		<section className="component">
			<h2 className="component-title">More complex Form</h2>
			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col w-[300px] border-black border-2 overflow-y-scroll p-4 h-[300px]"
			>
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" className="textInput" />
				<label htmlFor="lastname">Last Name</label>
				<input type="text" name="lastName" className="textInput" />
				<label htmlFor="email">Email</label>
				<input type="email" name="email" className="textInput" />
				<label htmlFor="age">Select Age</label>
				<select name="age" id="age-select" className="w-1/4 m-1 border-[1px] border-black rounded-md">
					{Array.from({ length: 110 - 18 + 1 }, (_, i) => 18 + i).map((num) => (
						<option value={num}>{num}</option>
					))}
				</select>
				<label htmlFor="">Phone Number</label>
				<div id="phone-number-container" className="flex">
					<input
						type="string"
						name="phoneAreacode"
						className="textInput w-14 mr-1"
						maxLength={3}
						onChange={(e) => e.target.value.replace(/[^0-9.]/g, '')}
					/>
					<span>-</span>
					<input type="string" name="phoneExtension" className="textInput w-14 mx-1" maxLength={3} />
					<span>-</span>
					<input type="string" name="phoneNumber" className="textInput ml-1" maxLength={4} />
				</div>
				<div id="address-input-container" className="flex flex-col">
					<label htmlFor="address-line-one">Address Line 1</label>
					<input type="text" name="address-line-one" className="textInput" />
					<label htmlFor="address-line-two">Address Line 2</label>
					<input type="text" name="address-line-two" className="textInput" />
				</div>
				<div className="flex mb-2">
					<input type="checkbox" name="agree" className="mr-2 w-4" />
					<label htmlFor="agree">Agree to Terms</label>
				</div>
				<label htmlFor="">Select Best Description</label>
				<div id="radio-inputs" className="grid grid-cols-2 gap-2">
					<input type="radio" name="first" />
					<label htmlFor="first">First</label>
					<input type="radio" name="second" />
					<label htmlFor="second">Second</label>
					<input type="radio" name="third" />
					<label htmlFor="third">Third</label>
					<input type="radio" name="fourth" />
					<label htmlFor="fourth">Fourth</label>
				</div>
			</form>
			<button type="submit" className="button">
				Submit Form
			</button>
		</section>
	)
}
