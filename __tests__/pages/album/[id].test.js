import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Album from "../../../pages/album/[id]";

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  }
];

describe("Album", () => {
  it("should contain persistent Header", () => {
    render(<Album photos={photos} />);

    const heading = screen.getByTestId("header");

    expect(heading).toBeInTheDocument();
  });

  it("should contain the album title (albumId)", () => {
    render(<Album photos={photos} />);

    const title = screen.getByTestId("album-title");

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("Album 1");
  });

  it("should display photos", () => {
    render(<Album photos={photos} />);

    const firstPhoto = screen.getByTestId("photo-card-1");

    expect(firstPhoto).toBeInTheDocument();
  });

  // getServerSideProps is not worth testing
});
