import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCard from "../../components/PhotoCard";

const photoCardData = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952"
};

describe("PhotoCard", () => {
  it("should contain the first photo's url", () => {
    render(<PhotoCard {...photoCardData} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image.alt).toBe(photoCardData.title);
  });

  it("should show the albumId", () => {
    render(<PhotoCard {...photoCardData} />);

    const photoTitle = screen.getByTestId("photo-title");

    expect(photoTitle).toBeInTheDocument();
    expect(photoTitle.textContent).toBe(photoCardData.title);
  });
});
