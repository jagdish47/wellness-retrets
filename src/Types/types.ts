export interface Data {
  title: string;
  description: string;
  date: number;
  location: string;
  price: number;
  type: string;
  condition: string;
  image: string;
  tag: string[];
  duration: number;
  id: string;
}

export interface Option {
  value: string;
  label: string;
}
