import React from "react";
import fetchMock from "fetch-mock";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

fetchMock.get("http://localhost:3000/contacts", [
	{
		id: "5ed2a8068a30c45b73209156",
		picture: "http://placehold.it/32x32",
		age: 20,
		eyeColor: "blue",
		name: "June Adams",
		email: "tommie.adams@facebook.org",
		company: "dell",
	},
	{
		id: "5ed2a806bd5b21b2a432432b",
		picture: "http://placehold.it/32x32",
		age: 30,
		eyeColor: "green",
		name: "Slater Lloyd",
		email: "slater.lloyd@codersinhoods.biz",
		company: "apple",
	},
]);

describe("App", () => {
	test("should fetch and render all contacts", async () => {
		let { container } = render(<App />);

		await waitFor(() => {
			const userElements = container.querySelectorAll("li");
			expect(userElements.length).toEqual(2);
		});
	});

	test("should render filtered contacts", async () => {
		const { container } = render(<App />);

		const input = container.querySelector("input");
		fireEvent.change(input, { target: { value: "June" } });

		await waitFor(() => {
			const userElements = container.querySelectorAll("li");
			expect(userElements.length).toEqual(1);
		});
	});
});
