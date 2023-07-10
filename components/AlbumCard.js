const AlbumCard = ({ albumId, id }) => {
  return (
    <div data-testid={`album-card-${albumId}`}>
      <a href={`/album/${albumId}`}>Album {id}</a>
    </div>
  );
};

export default AlbumCard;
