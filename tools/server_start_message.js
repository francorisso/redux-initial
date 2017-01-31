import chalk from 'chalk';

export default port => console.log(
  chalk.bgGreen.white.bold(`Server started at http://localhost:${port}/`)
);
