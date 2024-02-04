import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import listDirContents from '../dir-operations/listDirContents.js';
import goUp from '../dir-operations/goUp.js';
import changeDir from '../dir-operations/changeDir.js';
import read from '../file-operations/read.js';
import create from '../file-operations/create.js';
import rn from '../file-operations/rename.js';

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
        case 'cat':
          if (args.length) {
            await read(args.join(' '));
          } else {
            console.log('Invalid input. Please specify a file path');
          };
          break;
        case 'add':
          if (args.length) {
            await create(args.join(' '));
          } else {
            console.log('Invalid input. Please specify a file name');
          };
          break;
        case 'rn':
          if (args.length >= 2) {
            await rn(args[0], args[1]);
          } else {
            console.log('Invalid input. Please specify both the current file path and new file name');
          };
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
