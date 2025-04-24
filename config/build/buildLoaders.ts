import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const globalCssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  const cssLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: options.isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
          sourceMap: options.isDev,
        },
      },
      'sass-loader',
    ],
  };

  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    cssLoader,
    globalCssLoader,
  ]
}