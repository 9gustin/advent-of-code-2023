const argv = require('yargs').argv;

if (argv.day) {
  const dayScript = `./code/day${argv.day}.js`;
  require(dayScript);
} else {
  console.log('Por favor, especifica el número de día usando el argumento --day.');
}