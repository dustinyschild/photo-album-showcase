import Image from "next/image";
import styles from "../styles/PhotoCard.module.css";

const PhotoCard = ({ id, url, title }) => {
  return (
    <div className={styles.content} data-testid={`photo-card-${id}`}>
      <div>
        <Image alt={title} src={url} height="600" width="600" />
      </div>
      <div className={styles.titleContainer} data-testid="photo-title">
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
