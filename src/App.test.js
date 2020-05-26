import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/link goes here/i);
  expect(linkElement).toBeInTheDocument();
});
