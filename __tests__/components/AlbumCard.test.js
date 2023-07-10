import { render, screen } from "@testing-library/react";
import AlbumCard from "../../components/AlbumCard";
import "@testing-library/jest-dom";

const albumCardData = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952"
};

describe("AlbumCard", () => {
  it("should link to album", () => {
    render(<AlbumCard {...albumCardData} />);

    const albumLink = screen.getByRole("link");

    expect(albumLink.href).toBe("http://localhost/album/1");
  });

  it("should contain the first photo's thumbnail", () => {
    render(<AlbumCard {...albumCardData} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  // I would have prefered an album title but that doesn't exist in this data set
  it("should show the albumId", () => {
    render(<AlbumCard {...albumCardData} />);

    const albumName = screen.getByTestId("album-title");

    expect(albumName).toBeInTheDocument();
    expect(albumName.textContent).toBe("Album 1");
  });
});
