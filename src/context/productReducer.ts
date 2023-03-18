type ProductAction =
  | {type: 'addProducts'; payload: ProductModel[]}
  | {
      type: 'toggleRedemption';
      payload: null | boolean;
    }
  | {type: 'countPoints'; payload: number}
  | {type: 'toggleLoading'; payload: boolean}
  | {type: ''};

export const productReducer = (
  state: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case 'addProducts':
      return {
        ...state,
        products: [...action.payload],
        displayed: [...action.payload],
        loading: false,
      };
    case 'countPoints':
      return {...state, points: action.payload};
    case 'toggleRedemption':
      return {
        ...state,
        isRedemption: action.payload,
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
