type ProductModel = {
  id: string;
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
};

type ProductState = {
  products: ProductModel[];
  displayed: ProductModel[];
  points: number;
  isRedemption: null | boolean;
  loading: boolean;
};

type ProductContextProps = {
  productState: ProductState;
  getProducts: () => void;
  toggleDisplay: (selected: null | boolean) => void;
  toggleLoading: () => void;
};

interface ProductProviderProps {
  children: JSX.Element | JSX.Element[];
}

type RootParamList = {
  Home: undefined;
  Product: ProductModel;
};
