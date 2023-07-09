import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders the Header", () => {
    render(<Home />);

    const heading = screen.getByTestId("header");

    expect(heading).toBeInTheDocument();
  });

  it("renders the main content", () => {
    render(<Home />);

    const content = screen.getByTestId("main-content");

    expect(content).toBeInTheDocument();
  });
});
