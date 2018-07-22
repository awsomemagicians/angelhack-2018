const Fonts = {
  Oswald: {
    Regular: 'oswald-regular',
    Bold: 'oswald-bold',
    Medium: 'oswald-medium',
    SemiBold: 'oswald-semi-bold',
    Light: 'oswald-light',
    ExtraLight: 'oswald-extralight',
  },
};

const fontMaps = [
  { [Fonts.Oswald.Regular]: require('./Oswald-Regular.ttf') },
  { [Fonts.Oswald.Bold]: require('./Oswald-Bold.ttf') },
  { [Fonts.Oswald.SemiBold]: require('./Oswald-SemiBold.ttf') },
  { [Fonts.Oswald.Medium]: require('./Oswald-Medium.ttf') },
  { [Fonts.Oswald.Light]: require('./Oswald-Light.ttf') },
  { [Fonts.Oswald.ExtraLight]: require('./Oswald-ExtraLight.ttf') },
];

export { fontMaps };
export default Fonts;
