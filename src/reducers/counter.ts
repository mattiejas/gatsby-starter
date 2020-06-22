import { CountTypes, INCREMENT, DECREMENT, SET_LOADING } from 'src/actions/count';

type CounterState = {
  count: number;
  loading: boolean;
};

const initialState = { count: 0, loading: false };

export function counterReducer(state: CounterState = initialState, action: CountTypes): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: action.payload.previousCount + 1 };
    case DECREMENT:
      return { ...state, count: action.payload.previousCount - 1 };
    case SET_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
