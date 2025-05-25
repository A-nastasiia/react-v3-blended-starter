import styles from "./PhotosGalleryItem.module.css";
import type { Photo } from "../types/photo"; 

interface Props {
  photo: Photo;
}

export default function PhotosGalleryItem({ photo }: Props) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: photo.avg_color,
        borderColor: photo.avg_color,
      }}
    >
      <img src={photo.src.large} alt={photo.alt} />
    </div>
  );
}