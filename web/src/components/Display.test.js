import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";


// describe("<Display />", () => {
//   it('shows the correct ball score', () => {
//     const display = render(<Display strike={1} balls={2} />);
//     display.getByText(/Ball score: 2/);
//     display.getByText(/Strike score: 1/);



describe('Display component', () => {
  it('shows the correct ball score', () => {
    const { getByText } = render(<Display balls={2} />);

    expect(getByText('Ball score: 2')).toBeDefined();
  });

  it('shows the correct strike score', () => {
    const { getByText } = render(<Display strike={1} />);

    expect(getByText('Strike score: 1')).toBeDefined();
  });
});
