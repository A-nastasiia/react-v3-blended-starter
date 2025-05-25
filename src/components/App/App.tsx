import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form"; 
import PhotosGallery from "../PhotosGallery/PhotosGallery"; 
import Loader from "../Loader/Loader";  
import Text from "../Text/Text";
import { fetchPhotos } from "../services/photos";  
import type { Photo } from "../types/photo";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setQuery(query);
    setIsLoading(true);
    setIsError(false);

    try {
      const photosData = await fetchPhotos(query);
      setPhotos(photosData);
    } catch (error) { if (error instanceof Error) {
        console.error("Error fetching photos:", error.message); 
      } else {
        console.error("Unknown error occurred", error); 
      }
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <h1>Search for Photos</h1>

          <Form onSubmit={handleSearch} />

          {isLoading && <Loader />}

          {isError && <Text>Error fetching photos. Please try again.</Text>}

          {photos.length > 0 && !isLoading && (
            <PhotosGallery photos={photos} />
          )}

          {!isLoading && photos.length === 0 && query && (
            <Text>No photos found for your search query.</Text>
          )}
        </Container>
      </Section>
    </>
  );
}