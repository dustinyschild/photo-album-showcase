import Image from "next/image";
import styles from "../styles/AlbumCard.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const AlbumCard = ({ albumId, thumbnailUrl, title }) => {
  const [albumPhotos, setAlbumPhotos] = useState();

  useEffect(() => {
    const getFirstFivePhotos = async () =>
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      ).then((res) => res.json());

    getFirstFivePhotos().then((data) => {
      setAlbumPhotos(data.slice(0, 5));
    });
  }, [albumId]);

  return (
    <div className={styles.container}>
      <div className={styles.content} data-testid={`album-card-${albumId}`}>
        <div>
          <Link href={`/album/${albumId}`}>
            <Image alt={title} src={thumbnailUrl} height="150" width="150" />
          </Link>
        </div>
        <div data-testid="album-title">Album {albumId}</div>
      </div>
    </div>
  );
};

export default AlbumCard;
