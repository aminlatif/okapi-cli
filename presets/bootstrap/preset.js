exports.bootstrapPreset = () => ({
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,
    runtimeCompiler: false,
    transpileDependencies: [
      /* string or regex */
    ],
    productionSourceMap: false,
    parallel: true,
    lintOnSave: 'default',
    plugins: {
      "@babirusa/okapi": {
        version: "aminlatif/okapi"
      },
      "@babirusa/okapi-service": {
        version: "aminlatif/okapi-service"
      },
      "@babel/core": {},
      "@babel/preset-env": {},
      "@typescript-eslint/eslint-plugin": {},
      "@typescript-eslint/parser": {},
      "eslint": {},
      "eslint-plugin-import": {},
      "eslint-plugin-node": {},
      "eslint-plugin-promise": {},
      "eslint-plugin-standard": {},
      "sass": {},
      "typescript": {},
      "@popperjs/core": {},
      "bootstrap": {
        version: "next"
      },
      "core-js": {},
      "prettier": {},
      "tslint": {},
      "tslint-config-prettier": {}
    }
  })