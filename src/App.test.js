import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('Test add for empty string', () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Add" }))
  const result=screen.getByTestId("result").textContent
  expect(result).toEqual("Sum: 0");
});

test('Test add for single number', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId("textarea"),{target:{value:"5"}})
  fireEvent.click(screen.getByRole("button", { name: "Add" }))
  const result=screen.getByTestId("result").textContent
  expect(result).toEqual("Sum: 5");
});

test('Test add for two comma seperated numbers ', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId("textarea"),{target:{value:"5,6"}})
  fireEvent.click(screen.getByRole("button", { name: "Add" }))
  const result=screen.getByTestId("result").textContent
  expect(result).toEqual("Sum: 11");
});

test('Test add for two numbers with delimeter', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId("textarea"),{target:{value:"//;\n5;6"}})
  fireEvent.click(screen.getByRole("button", { name: "Add" }))
  const result=screen.getByTestId("result").textContent
  expect(result).toEqual("Sum: 11");
});

test('Test invalid input', () => {
  const {container}=render(<App />);
  fireEvent.change(screen.getByTestId("textarea"),{target:{value:"//;\n5,6"}})
  fireEvent.click(screen.getByRole("button", { name: "Add" }))
  expect(container.getElementsByClassName('is-invalid').length).toBe(1);
});
