export interface ProdukInterface {
  image: string;
  key: string;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  additionalInfo?: string[];
  tags?: string[];
  description?: {
    specifications: {
      section: string;
      title: {
        key: string;
        value: string;
      }[];
      desc: {
        key: string;
        value: string;
      }[];
    }[];
  };
}

export interface CategoryInterface {
  image: string;
  key: string;
  name: string;
}
