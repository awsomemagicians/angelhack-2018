import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

import renderWhen from '../../hoc/nonOptimalStates/nonOptimalStates.hoc';

const hasNoChildren = ({ children }) => !children;
const TouchableAndroid = ({ onPress, ...rest }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View {...rest} />
  </TouchableNativeFeedback>
);
const enhance = renderWhen([
  {
    when: hasNoChildren,
    render: TouchableNativeFeedback,
  },
]);

const Touchable = enhance(TouchableAndroid);
Touchable.displayName = 'TouchableAndroid';

export default Touchable;
