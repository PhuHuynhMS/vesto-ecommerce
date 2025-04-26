export interface IProduct {
  id: number;
  images: string[];
  name: string;
  price: number;
  stockQuantity: number;
  slug: string;
  categories: string[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isInStock?: boolean;
}
