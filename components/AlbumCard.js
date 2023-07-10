import Image from "next/image";
import styles from "../styles/AlbumCard.module.css";
import Link from "next/link";

const AlbumCard = ({ albumId, thumbnailUrl, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-testid={`album-card-${albumId}`}>
        <div className={styles.imgWrapper}>
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
