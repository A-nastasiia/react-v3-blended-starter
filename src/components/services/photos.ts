import axios from "axios";
import type { Photo } from "../types/photo";

const API_KEY = import.meta.env.VITE_REXELS_API_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

export const fetchPhotos = async (query: string): Promise<Photo[]> => {
  const response = await axios.get('search', {
    params: {
      query,
      per_page: 15,
    },
  });

  return response.data.photos;
};