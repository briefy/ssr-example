const path = require('path');
const glob = require('glob');

const webTarget = {
  entry: getEntry(),
  output: {
    filename: '[name].node.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: "source-map",
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  }
}

const serverTarget = {
  entry: getEntry('index'),
  output: {
    filename: '[name].web.js',
    path: path.resolve(__dirname, './server/build'),
  },
  devtool: "source-map",
  target: 'web',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  }
}

module.exports = [webTarget, serverTarget];

function getEntry(name = "app") {
  const files = glob.sync(
    `./src/**/${name}.js`, {
      debug: false,
    }
  );
  const entry = {};
  files.forEach(file => {
    const path = file
      .replace('src/', '')
      .replace(/\.js$/, '');
    return entry[path] = file;
  })
  return entry;
}