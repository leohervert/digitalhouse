import {productReducer} from '../../src/context/productReducer';
import {MockInitialState} from '../../__mocks__/InitialStateMock';
import {ProductMock} from '../../__mocks__/ProductMock';
describe('Reducers', () => {
  test('Return InitialState', () => {
    expect(productReducer(MockInitialState, {type: ''})).toEqual(
      MockInitialState,
    );
  });

  test('addProducts', () => {
    const initialState: ProductState = MockInitialState;

    const expected: ProductState = {
      products: [ProductMock],
      displayed: [ProductMock],
      isRedemption: null,
      loading: false,
      points: 0,
    };
    expect(
      productReducer(initialState, {
        type: 'addProducts',
        payload: [ProductMock],
      }),
    ).toEqual(expected);
  });

  test('countPoints', () => {
    const initialState: ProductState = MockInitialState;
    const expected: ProductState = {
      ...initialState,
      points: ProductMock.points,
    };
    expect(
      productReducer(initialState, {
        type: 'countPoints',
        payload: ProductMock.points,
      }),
    ).toEqual(expected);
  });

  test('toggleRedemption', () => {
    const initialState: ProductState = MockInitialState;
    const expected: ProductState = {
      ...initialState,
      isRedemption: true,
    };

    expect(
      productReducer(initialState, {
        type: 'toggleRedemption',
        payload: true,
      }),
    ).toEqual(expected);
  });

  test('toggleLoading', () => {
    const initialState: ProductState = MockInitialState;
    const expected: ProductState = {
      ...initialState,
      loading: true,
    };

    expect(
      productReducer(initialState, {
        type: 'toggleLoading',
        payload: true,
      }),
    ).toEqual(expected);
  });
});
