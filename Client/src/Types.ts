export interface Item {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  count?: number;
}
export interface ContextType {
  cart: Item[];
  setCart: React.Dispatch<React.SetStateAction<Item[] | null>>;
}
