export interface Photo {
    id: number;
  avg_color: string;
  alt: string;
  src: {
    large: string;
    original: string;
       };
}

export interface PhotoSrc {
  original: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}