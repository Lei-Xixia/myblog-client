// // vue-cli的配置文件

module.exports = {
  publicPath: ".",
  devServer: {
    open: false,
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
  // configureWebpack: require("./webpack.config"),
};
