import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByTestId("main-heading", {
      name: "Photo Album Showcase"
    });

    expect(heading).toBeInTheDocument();
  });
});
