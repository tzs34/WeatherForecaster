import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";

const HTMLWebpackPluginConfig = new HtmlWebPackPlugin({
  template: path.join(__dirname, "/src/index.html"),
  filename: "index.html",
  inject: "body"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "[name].[hash:7].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      utils: path.resolve(__dirname, "./src/utils/"),
      context: path.resolve(__dirname, "./src/context/")
    }
  },
  plugins: [HTMLWebpackPluginConfig],
  watch: true,
  devtool: "cheap-module-inline-source-map"
};
