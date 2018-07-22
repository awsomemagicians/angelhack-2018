import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';

// ------------------------------------
// Actions
// ------------------------------------

const dummyAction = createAction('Dummy');

export const actions = {
  dummyAction,
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  value: 0,
};

const dummyActionHandler = state => {
  const value = state.value + 1;

  return {
    ...state,
    value,
  };
};

export default typeToReducer(
  {
    [dummyAction]: dummyActionHandler,
  },
  initialState
);
