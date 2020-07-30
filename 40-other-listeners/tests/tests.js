const {
	fireEvent
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise 1
describe("popUp double click", () => {
	test("should open popup", () => {
		expect(document.querySelector('.popup.open')).toBeFalsy();

		fireEvent.dblClick(document.querySelector('.trigger'))

		expect(document.querySelector('.popup.open')).toBeTruthy();
	});
});

// Exercise 2
describe("image double click", () => {
	test("should zoom image", () => {
		expect(document.querySelector('.zoom')).toBeFalsy();

		fireEvent.dblClick(document.querySelector('.img'))
		
		expect(document.querySelector('.zoom')).toBeTruthy();
	});
});

