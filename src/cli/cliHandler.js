import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import listDirContents from '../dir-operations/listDirContents.js';
import goUp from '../dir-operations/goUp.js';
import changeDir from '../dir-operations/changeDir.js';

const cliHandler = (username) => {
  const rl = createInterface({
    input: stdin,
    output: stdout
  });

  const onUserInput = async(input) => {
    const [command, ...args] = input.trim().split(/\s+/);

    if (command === '.exit') {
      rl.close();
    } else {
      switch (command) {
        case 'ls':
          await listDirContents();
          break;
        case 'up':
          goUp();
          break;
        case 'cd':
          if (args.length) {
            changeDir(args.join(' '));
          } else {
            console.log('Invalid input. Please specify a directory path');
          }
          break;
      }
      rl.prompt();
    }
  };

  const onClose = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit();
  };

  rl.on('line', onUserInput);

  rl.on('close', onClose);
};

export default cliHandler;
