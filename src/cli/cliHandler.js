import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import listDirContents from '../dir-operations/listDirContents.js';

const cliHandler = (username) => {
  const rl = createInterface({
    input: stdin,
    output: stdout
  });

  const onUserInput = async(input) => {
    const command = input.trim();

    if (command === '.exit') {
      rl.close();
    } else {
      switch (command) {
        case 'ls':
          await listDirContents();
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
