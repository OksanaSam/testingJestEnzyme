import React from "react";
// import { render } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// first test
test("renders without error", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // throw new Error();
});

test("renders button", () => {
  // const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // throw new Error();
});

test("renders counter display", () => {
  // const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // throw new Error();
});

test("counter starts at 0", () => {
  // const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // throw new Error();
});

test("clicking on button increments counter display", () => {
  // const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // throw new Error();
});
