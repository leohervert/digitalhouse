type ProductAction =
  | {type: 'addProducts'; payload: {products: ProductModel[]; points: number}}
  | {
      type: 'toggleRedemption';
      payload: {
        products: ProductModel[];
        redemption: 'all' | 'redeemed' | 'saved';
      };
    }
  | {type: 'countPoints'; payload: number}
  | {type: 'toggleLoading'; payload: boolean};

export const productReducer = (
  state: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case 'addProducts':
      return {
        ...state,
        products: [...action.payload.products],
        displayed: [...action.payload.products],
        points: action.payload.points,
        loading: false,
      };
    case 'countPoints':
      return {...state, points: action.payload};
    case 'toggleRedemption':
      return {
        ...state,
        displayed: [...action.payload.products],
        isRedemption: action.payload.redemption,
        loading: false,
      };
    case 'toggleLoading':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
