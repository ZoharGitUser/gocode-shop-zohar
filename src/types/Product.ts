type RatingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

export type ProductInCartType = {
  item: ProductType;
  quantity: number;
};

/*export type ProductInCartType = ProductType & {
  quantity: number;
};*/
