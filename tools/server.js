import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config.dev';
import startMessage from './server_start_message';

const port = 3000;
const apiServers = {
  trainer: 'http://localhost:3033/',
};

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(port, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  return startMessage(port);
});
