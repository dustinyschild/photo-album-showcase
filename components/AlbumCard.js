import Image from "next/image";

const AlbumCard = ({ albumId, thumbnailUrl, title }) => {
  return (
    <div data-testid={`album-card-${albumId}`}>
      <a href={`/album/${albumId}`}>
        <Image alt={title} src={thumbnailUrl} height="150" width="150" />
      </a>
    </div>
  );
};

export default AlbumCard;
