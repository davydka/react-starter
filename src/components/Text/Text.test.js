import React from "react";
import { render } from "@testing-library/react";
import { Text } from "./";

test("renders text", () => {
  const { getByText } = render(<Text>hello there</Text>);
  const textElement = getByText(/hello there/i);
  expect(textElement).toBeInTheDocument();
});
