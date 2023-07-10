import Image from "next/image";
import styles from "../styles/AlbumCard.module.css";

const PhotoCard = ({ id, url, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-testid={`photo-card-${id}`}>
        <div className={styles.imgWrapper}>
          <Image alt={title} src={url} height="600" width="600" />
        </div>
        <div data-testid="photo-title">{title}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
