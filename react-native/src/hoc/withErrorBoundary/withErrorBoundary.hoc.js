import { NetInfo } from 'react-native';
import { compose, withState, lifecycle, withHandlers } from 'recompose';

import { isAndroid } from '../../utils/platform.util';

const callbacks = {
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.props.handleNetwork);
  },
  async componentDidMount() {
    const isConnected = await NetInfo.isConnected.fetch();

    if (isAndroid()) {
      this.props.updateConnected(isConnected);
    }

    NetInfo.isConnected.addEventListener('connectionChange', this.props.handleNetwork);
  },
};
const handlers = {
  handleNetwork: props => isConnected => props.updateConnected(isConnected),
};
const enhance = compose(
  withState('connected', 'updateConnected', true),
  withHandlers(handlers),
  lifecycle(callbacks)
);

export { handlers, callbacks };
export default enhance;
