module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // chainWebpack: config => {
  //   config
  //       .entry('index')
  //       .add('babel-polyfill')
  // },  //根据刚才在思否上查的资料修改的
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  },
 
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  //  css: {
  //    extract: true, // 是否使用css分离插件 ExtractTextPlugin
  //    sourceMap: false, // 开启 CSS source maps?
  //    loaderOptions: {
  //      css: {},
  //      postcss: {
  //        plugins: [
  //          require('postcss-px2rem')({
  //            remUnit: 37.5
  //          })
  //        ]
  //      }
  //    }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
  //    modules: false // 启用 CSS modules for all css / pre-processor files.
  //   },
  // 第三方插件配置
  pluginOptions: {}
}
