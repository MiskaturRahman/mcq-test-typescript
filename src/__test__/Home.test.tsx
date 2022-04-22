import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

//Home Test
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
test("Home render test", () => {
  render(<Home />);
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});

test("render h1 element", () => {
  render(<Home />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();

  expect(screen.getByText("Please Enter your name")).toBeInTheDocument();
});

// test("check input is required", () => {
//   render(<Home />);
//   const name = screen.getByTestId("inputField");
//   expect(name).toHaveValue();
// });
