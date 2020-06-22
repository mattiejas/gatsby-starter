// Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_LOADING = 'SET_LOADING';

interface IncrementAction {
  type: typeof INCREMENT;
  payload: {
    previousCount: number;
  };
}

interface DecrementAction {
  type: typeof DECREMENT;
  payload: {
    previousCount: number;
  };
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: {
    loading: boolean;
  };
}

export type CountTypes = IncrementAction | DecrementAction | SetLoadingAction;

// Actions
export function setLoading(loading: boolean) {
  return {
    type: SET_LOADING,
    payload: { loading },
  };
}

export function increment(previousCount: number) {
  return {
    type: INCREMENT,
    payload: { previousCount },
  };
}

export function incrementAsync(previousCount: number) {
  return (dispatch) => {
    // emulate API call
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(increment(previousCount));
      dispatch(setLoading(false));
    }, 2000);
  };
}

export function decrement(previousCount: number) {
  return {
    type: DECREMENT,
    payload: { previousCount },
  };
}

export function decrementAsync(previousCount: number) {
  return (dispatch) => {
    // emulate API call
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(decrement(previousCount));
      dispatch(setLoading(false));
    }, 2000);
  };
}
