import { Platform } from 'react-native';
import { equals } from 'ramda';
import { Constants } from 'expo';

const isDEV = () => equals(process.env.NODE_ENV, 'development');
const isIOS = () => equals(Platform.OS, 'ios');
const isAndroid = () => equals(Platform.OS, 'android');
const iPhoneX = 'iPhone X';
const isIPhoneX = () => isIOS() && Constants.platform.ios.model === iPhoneX;

export { isDEV, isIOS, isAndroid, isIPhoneX };
