const { getDefaultConfig } = require('expo/metro-config');

// metro.config.js
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

function getConfig() {
  // eslint-disable-next-line no-undef
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    //babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return config;
}

// module.exports = (() => {
//   // eslint-disable-next-line no-undef
//   const config = getDefaultConfig(__dirname);

//   const { transformer, resolver } = config;

//   config.transformer = {
//     ...transformer,
//     //babelTransformerPath: require.resolve('react-native-svg-transformer'),
//   };
//   config.resolver = {
//     ...resolver,
//     assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
//     sourceExts: [...resolver.sourceExts, 'svg'],
//   };

//   return config;
// })();


module.exports = wrapWithReanimatedMetroConfig(getConfig());