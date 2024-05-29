export type MediaType = {
  text: string;
  name: string;
  webUrl?: string;
};

export type SpectacleType = {
  name?: string;
  dateAndCity?: string;
  place?: string[];
  description?: string;
  media?: MediaType[];
  demoUrl?: string;
  images: string[];
};
