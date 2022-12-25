
const conf = new (require('conf'))();
const chalk = require('chalk');

function list () {
  const devlist = conf.get('devlist');
  if (devlist && devlist.length) {
    console.log(chalk.blue.bold('Select an item.'));   
    devlist.forEach((mod, index) => {
      console.log(chalk.greenBright(`${index}. ${mod.description}`));
    })
  } else {
    console.log(
      chalk.red.bold('You don\'t have any list items yet.')
    );
  }
}

module.exports = list;