const AlbumCard = ({ albumId, id }) => {
  return <div data-testid={`album-card-${albumId}`}>Card {id}</div>;
};

export default AlbumCard;
