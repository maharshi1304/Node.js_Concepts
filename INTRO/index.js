// const figlet = require("figlet")

// const chalk = require("chalk")

// console.log(chalk.blue("helo"))

// figlet("Maharshi Mishra", (err, data)=> {
//     console.log(chalk.red(data))
// })

const figlet = require("figlet");
const chalk = require("chalk");

// Step 1: simple blue text
console.log(chalk.blue("helo\n"));

// Step 2: multi-colored ASCII banner
figlet("Maharshi ♥️ Mishra ", (err, data) => {
  if (err) {
    console.log(chalk.red("Something went wrong..."));
    console.error(err);
    return;
  }

  // Split figlet output line by line
  const lines = data.split("\n");

  // Define some colors to cycle through
  const colors = [
    chalk.redBright,
    chalk.yellowBright,
    chalk.greenBright,
    chalk.cyanBright,
    chalk.magentaBright,
    chalk.blueBright,
  ];

  // Print each line with a different color
  lines.forEach((line, index) => {
    const colorFn = colors[index % colors.length];
    console.log(colorFn(line));
  });

  console.log(chalk.bold("\n✨ Love & Code by Maharshi ❤️"));
});