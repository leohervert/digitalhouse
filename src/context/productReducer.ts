type ProductAction =
  | {type: 'addProducts'; payload: {products: ProductModel[]; points: number}}
  | {type: 'toggleRedemption'; payload: boolean}
  | {type: 'countPoints'; payload: number};

export const productReducer = (
  state: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case 'addProducts':
      return {
        ...state,
        products: [...action.payload.products],
        points: action.payload.points,
      };
    case 'countPoints':
      return {...state, points: action.payload};
    case 'toggleRedemption':
      return {...state, isRedemption: action.payload};
    default:
      return state;
  }
};
