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

const photoData = [
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
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  }
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(photoData)
  })
);

describe("AlbumCard", () => {
  it("should show the album title (albumId)", () => {
    render(<AlbumCard {...albumCardData} />);

    const albumName = screen.getByTestId("album-title");

    expect(albumName).toBeInTheDocument();
    expect(albumName.textContent).toBe("Album 1");
  });

  // mock the data for hook
  it("should show up to 5 album photos", () => {
    render(<AlbumCard {...albumCardData} />);

    const photos = screen.queryAllByRole("img");

    expect(photos).toHaveLength(5);
  });

  it("should have a See All link", () => {
    render(<AlbumCard {...albumCardData} />);

    const albumLink = screen.getByRole("link");

    expect(albumLink.href).toBe("http://localhost/album/1");
    expect(albumLink.textContent).toContain("See All");
  });
});
