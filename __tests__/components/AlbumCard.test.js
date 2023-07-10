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
  it("should show album content", () => {
    render(<AlbumCard {...albumCardData} />);
  });
});
