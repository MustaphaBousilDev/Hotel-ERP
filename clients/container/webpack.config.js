const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
<<<<<<< HEAD
=======
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }]
      },
      {
>>>>>>> typeorm
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
<<<<<<< HEAD
        exclude: /node_modules/,
=======
        exclude: /node_modules/, 
>>>>>>> typeorm
        use: {
          loader: "babel-loader",
        },
      },
<<<<<<< HEAD
=======
      {
        test: /\.json$/,
        use: 'json-loader',
        type: 'javascript/auto',
      },
>>>>>>> typeorm
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
<<<<<<< HEAD
      remotes: {},
=======
      remotes: {
        "tasks":"tasks@http://localhost:4201/remoteEntry.js",
        static_all:"static_all@http://localhost:3004/remoteEntry.js",
        auth: "auth@http://localhost:3005/remoteEntry.js"
      },
>>>>>>> typeorm
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
