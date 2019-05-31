var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message1 = chalk.red("Good ") + chalk.blue.strikethrough("Morning!");
console.log(message1);