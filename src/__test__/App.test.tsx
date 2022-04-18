import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("App test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test("Browser router", () => {
  render(<App />);
  const linkElement = screen.getByTestId("container");
  expect(linkElement).toBeInTheDocument();
});
