import Grid from "../Grid/Grid";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import type { Photo } from "../types/photo"; 

interface Props {
  photos: Photo[];
}

export default function PhotosGallery({ photos }: Props) {
  return (
    <Grid>
      {photos.map((photo) => (
        <PhotosGalleryItem key={photo.id} photo={photo} />
      ))}
    </Grid>
  );
}