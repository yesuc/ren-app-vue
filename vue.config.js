const { VuetifyPlugin } = require("webpack-plugin-vuetify");
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("ren-app-vue", __dirname);
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  transpileDependencies: true,
};
