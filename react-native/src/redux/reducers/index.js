import { combineReducers } from 'redux';

import dummy from '../reducers/Dummy/Dummy.reducer';
import nav from '../reducers/Navigation/Navigation.reducer';

const AppReducer = combineReducers({
  nav,
  dummy,
});

export default AppReducer;
