module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        "targets" : "last 2 versions",
        "useBuiltIns": "usage",
        "corejs" : "3",
        "modules": false
      }
    ],
    "@babel/preset-react"
  ];

  const plugins = [
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ];

  return {
    presets,
    plugins
  };
};
