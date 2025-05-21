const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Tambahkan ini untuk SVG
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

const assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
const sourceExts = [...config.resolver.sourceExts, 'svg'];

config.resolver.assetExts = assetExts;
config.resolver.sourceExts = sourceExts;

// Wrap dengan NativeWind seperti sebelumnya
module.exports = withNativeWind(config, { input: './global.css' });
