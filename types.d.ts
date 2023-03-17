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
  isRedemption: 'all' | 'saved' | 'redeemed';
  loading: boolean;
};

type ProductContextProps = {
  productState: ProductState;
  getProducts: () => void;
  toggleDisplay: (selected: 'all' | 'saved' | 'redeemed') => void;
  toggleLoading: () => void;
};

interface ProductProviderProps {
  children: JSX.Element | JSX.Element[];
}

type RootParamList = {
  Home: undefined;
  Product: ProductModel;
};
