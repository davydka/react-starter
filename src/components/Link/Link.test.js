import React from "react";
import { render } from "@testing-library/react";
import { Link } from "./";

test("renders link", () => {
  const { getByText } = render(
    <Link href="https://google.com">link goes here</Link>
  );
  const linkElement = getByText(/link goes here/i);
  expect(linkElement).toBeInTheDocument();
});
