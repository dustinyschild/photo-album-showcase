import Image from "next/image";
import styles from "../styles/AlbumCard.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const getFirstFivePhotos = async (id) =>
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((res) => res.json())
    .then((data) => data.slice(0, 5));

const AlbumCard = ({ albumId }) => {
  const [albumPhotos, setAlbumPhotos] = useState();

  useEffect(() => {
    getFirstFivePhotos(albumId).then((data) => setAlbumPhotos(data));
  }, [albumId]);

  return (
    <div className={styles.container}>
      <div className={styles.content} data-testid={`album-card-${albumId}`}>
        {albumPhotos && (
          <div data-testid="photo-thumbnails">
            {albumPhotos.map((photo) => (
              <Image
                key={photo.id}
                alt={photo.title}
                src={photo.thumbnailUrl}
                height="150"
                width="150"
              />
            ))}
          </div>
        )}
        <div data-testid="album-title">Album {albumId}</div>
        <Link href={`/album/${albumId}`}>See All</Link>
      </div>
    </div>
  );
};

export default AlbumCard;
