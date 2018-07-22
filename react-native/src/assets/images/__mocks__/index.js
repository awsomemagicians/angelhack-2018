const images = require.requireActual('../index').default

const mockImages = Object.keys(images).reduce(
  (prev, key) => ({
    ...prev,
    [key]: { uri: key }
  }),
  {}
)

export default mockImages
