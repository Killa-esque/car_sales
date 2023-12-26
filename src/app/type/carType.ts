enum CarDetailTitle {
  OVERVIEW = "OVERVIEW",
  DESIGN = "DESIGN",
  SPECIFICATION = "SPECIFICATION",
  COMFORT_AND_SAFETY = "COMFORT AND SAFETY",
  LIBRARY = "LIBRARY",
  EVALUATION = "EVALUATION",
}

interface CarDetail {
  title: CarDetailTitle;
  paragraphs: string[];
  images: string[];
  videos: string[];
}

interface CarColor {
  name: string;
  code: string;
  imageUrl: string;
}

export interface VolkswagenCar {
  model: string;
  retailPrice: number;
  salePrice: number;
  imageUrl: string;
  detail: CarDetail[];
  category: string;
  color: CarColor[];
}



