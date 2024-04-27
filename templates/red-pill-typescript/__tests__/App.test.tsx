import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "../App";

describe("<App />", () => {
	// it("renders correctly", () => {
	// 	render(<App />);
	// 	expect(screen.getByText("Your App Content")).toBeDefined();
	// });

	it("has 1 child", () => {
		render(<App />);
		const appContainer = screen.getByTestId("app-container");

		expect(appContainer.children.length).toBe(1);
	});
});
