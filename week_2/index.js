var fsOperations = require('./fsOperations')
const cmd = process.argv[2];
const args = process.argv.slice(3);

function printHelp() {
  console.log(`Usage: node index.js [options]
HackYourFuture Node.js Week 2 - Homework  To-Do App
Options:
  add          Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.
  remove       Removes a to-do item by its 1-base index, e.g. to remove second item, execute
  help         show this help text
  list         Shows current to-dos, or shows an appropriate text if there are no to-dos
  reset        Removes all to-do items from the list
  `);
}

switch (cmd) {
  case 'add':
    fsOperations.appendFile(args)
        .then(() => fsOperations.readFile())
        .then(data => console.log(`To-Dos:\n${data}`))
    break;
  case 'remove':
    var newData
    fsOperations.readFile()
      .then(data => newData = data.split(`\n`).slice(args).join(`\n`))
      .then(() => fsOperations.writeFile(newData))
      .then(() => fsOperations.readFile())
      .then(data => console.log(`To-Dos:\n${data}`))
      .catch()
    break;
  case 'list':
      fsOperations.readFile()
        .then(data => console.log(`To-Dos:\n${data}`))
  break;
  case 'reset':
    fsOperations.deleteFile()
      .then(() => fsOperations.writeFile(''))
      .then(() => fsOperations.readFile())
      .then(data => console.log(`To-Dos:\n${data}`))
  break;
  case 'help':
    printHelp()
    break;
  default:
    break;

}
