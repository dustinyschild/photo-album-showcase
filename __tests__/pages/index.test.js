import { render, screen } from "@testing-library/react";
import Home, { getServerSideProps } from "../../pages/index";
import "@testing-library/jest-dom";

const albumCards = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 2,
    id: 51,
    title: "non sunt voluptatem placeat consequuntur rem incidunt",
    url: "https://via.placeholder.com/600/8e973b",
    thumbnailUrl: "https://via.placeholder.com/150/8e973b"
  }
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
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
        },
        {
          albumId: 2,
          id: 51,
          title: "non sunt voluptatem placeat consequuntur rem incidunt",
          url: "https://via.placeholder.com/600/8e973b",
          thumbnailUrl: "https://via.placeholder.com/150/8e973b"
        }
      ])
  })
);

// eslint-disable-next-line react/display-name
jest.mock("../../components/AlbumCard", () => () => {
  const AlbumCard = "album-card";
  return <AlbumCard data-testid="album-card" />;
});

describe("Home", () => {
  it("renders the Header", () => {
    render(<Home albumCards={albumCards} />);

    const heading = screen.getByTestId("header");

    expect(heading).toBeInTheDocument();
  });

  it("renders the main content", () => {
    render(<Home albumCards={albumCards} />);

    const content = screen.getByTestId("main-content");
    const albumCardElements = screen.getAllByTestId("album-card");

    expect(content).toBeInTheDocument();
    expect(albumCardElements).toHaveLength(2);
  });

  it("should return first photo in each album", async () => {
    const data = await getServerSideProps();

    expect(data.props.albumCards).toHaveLength(2);
  });
});
