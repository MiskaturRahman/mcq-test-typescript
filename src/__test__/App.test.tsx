import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Question from "../pages/Question";
import { QuestionInfo } from "../json/QuestionData";
import Exam from "../pages/Exam";
import Home from "../pages/Home";

//App test
test("App test", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

//Question test
test("renders question", () => {
  const question: QuestionInfo = {
    id: 1,
    title: "string",
    options: [""],
    matchAns: [""],
    ans: [""],
    lang: "string",
    type: "",
  };

  const isAns = () => {
    return false;
  };

  const handAns = () => {
    console.log("handle ans");
  };

  render(<Question question={question} isAns={isAns} handleAns={handAns} />);
  const questionElement = screen.getByTestId("question");
  expect(questionElement).toBeInTheDocument();
});

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

// //Exam test
// const originalModule = jest.requireActual("react-router-dom");

// module.exports = {
//   __esModule: true,
//   ...originalModule,
//   useLocation: jest.fn().mockReturnValue({ pathname: "/exam" }),
//   useNavigate: jest.fn(),
// };

// test("Exam render test", () => {
//   render(<Exam />);
//   const exam = screen.getByTestId("exam");
//   expect(exam).toBeInTheDocument();
// });

test("render h1 element", () => {
  render(<Home />);

  screen.debug();

  expect(screen.getByText("Please Enter your name")).toBeInTheDocument();
});

// test("check input is required", () => {
//   render(<Home />);
//   const name = screen.getByTestId("inputField");
//   expect(name).toHaveValue();
// });
