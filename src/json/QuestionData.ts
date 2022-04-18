export const multipleChoice = "multipleChoice";
export const fillInTheBlank = "fillInTheBlank";
export const multiSelect = "multiSelect";
export const followingMatch = "followingMatch";
export const trueFalse = "trueFalse";

export interface QuestionInfo {
  id: number;
  title: string;
  options: string[];
  matchAns?: string[];
  ans: string[];
  lang: string;
  type: string;
}

export const qList: QuestionInfo[] = [
  {
    id: 1,
    type: multipleChoice,
    title: " Which of the following are the advantages of React.js?",
    options: [
      "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
      "The library of React.js is pretty large.",
      "The JSX in React.js makes code easy to read and write.",
      "The learning curve can be steep in React.js.",
    ],
    ans: ["The JSX in React.js makes code easy to read and write."],
    lang: "React",
  },
  {
    id: 2,
    type: fillInTheBlank,
    title: "to create a class for Inheritance the command is __________?",
    options: ["Create", "Extends", "Inherits", "Delete"],
    ans: ["Extends"],
    lang: "React",
  },
  {
    id: 3,
    type: multiSelect,
    title: "Which of the following is a way to handle data in React.js? ",
    options: ["Props", "State", "Components", "Services"],
    ans: ["Props", "State"],
    lang: "React",
  },
  {
    id: 4,
    type: followingMatch,
    title: "Match the following",
    options: ["js", "ts"],
    matchAns: ["react", "angular"],
    ans: ["js->react", "js->angular"],
    lang: "React",
  },
  {
    id: 5,
    type: trueFalse,
    title: "Super() method refers to parent class in React.js",
    options: ["true", "false"],
    ans: ["true"],
    lang: "React",
  },
  {
    id: 6,
    type: multipleChoice,
    title: "React native was initially released in",
    options: ["2015", "2016", "2017", "2018"],
    ans: ["2015"],
    lang: "React Native",
  },
  {
    id: 7,
    type: fillInTheBlank,
    title: " ________is used to create immutable stylesheet references",
    options: ["none", "stylesheet", "Interaction manager", "Redux"],
    ans: ["stylesheet"],
    lang: "React Native",
  },
  {
    id: 8,
    type: multiSelect,
    title: "To update react native with latest version what will you use?",
    options: [
      "react-native init",
      "react-native upgrade",
      "npx react-native",
      "none",
    ],
    ans: ["react-native init", "react-native upgrade"],
    lang: "React Native",
  },
  {
    id: 9,
    type: trueFalse,
    title: "Virtual DOM creates a copy of the whole DOM object",
    options: ["true", "false"],
    ans: ["true"],
    lang: "React Native",
  },
  {
    id: 10,
    type: multipleChoice,
    title: "Select the correct statement about uncontrolled components.",
    options: [
      "It maintains its internal states",
      "data is controlled by the DOM itself",
      "A ref is used for their current values",
      "All",
    ],
    ans: ["All"],
    lang: "React Native",
  },
];

export const getQuestionByLang = (value: string): QuestionInfo[] => {
  return qList.filter((q) => q.lang.toLowerCase() === value.toLowerCase());
};
export const getQuestionById = (id: number): QuestionInfo | undefined => {
  return qList.find((q) => q.id === id);
};
