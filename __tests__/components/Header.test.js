import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders the main page heading", () => {
    render(<Header />);

    const heading = screen.getByTestId("main-heading");

    expect(heading).toBeInTheDocument();
  });

  it("renders a subheading with my name", () => {
    render(<Header />);

    const heading = screen.getByTestId("sub-heading");

    expect(heading).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Header />);

    const githubLink = screen.getByTestId("github-link");
    const linkedInLink = screen.getByTestId("linkedin-link");

    expect(githubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();
  });
});
