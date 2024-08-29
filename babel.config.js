module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      // "expo-router/babel",
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      "react-native-reanimated/plugin",]
  };
};


// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       ['module:react-native-dotenv', {
//         moduleName: '@env',
//         path: '.env',
//         blacklist: null,
//         whitelist: null,
//         safe: false,
//         allowUndefined: true,
//       }],
//     ],
//   };
// };

// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       [
//         'module:react-native-dotenv',
//         {
//           moduleName: '@env',
//           path: '.env',
//         },
//       ],
//     ],
//   };
// };
