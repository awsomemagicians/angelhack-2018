import { RootNavigator } from '../../../modules/Navigation/Navigation.container';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Main')
);

const nav = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

export default nav;
