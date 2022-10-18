module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("ren-app-vue", __dirname);
  },
  transpileDependencies: ["vuetify"],
};
