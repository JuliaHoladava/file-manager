import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import listDirContents from '../dir-operations/listDirContents.js';
import goUp from '../dir-operations/goUp.js';
import changeDir from '../dir-operations/changeDir.js';
import read from '../file-operations/read.js';
import create from '../file-operations/create.js';
import rn from '../file-operations/rename.js';
import copy from '../file-operations/copy.js';
import move from '../file-operations/move.js';
import remove from '../file-operations/remove.js';
import printEOL from '../system-info/printEOL.js';
import printHost from '../system-info/printHost.js';
import printHomeDir from '../system-info/printHomeDir.js';
import printSystemUserName from '../system-info/printSystemUserName.js';
import printCPUArch from '../system-info/printCPUArch.js';
import calcHash from '../hash/calsHash.js';
import compress from '../zip/compress.js';
import decompress from '../zip/decompress.js';

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

        case 'cp':
          if (args.length >= 2) {
            await copy(args[0], args[1]);
          } else {
            console.log('Invalid input. Please specify both the current file path and new file directory');
          };
          break;

        case 'mv':
          if (args.length >= 2) {
            await move(args[0], args[1]);
          } else {
            console.log('Invalid input. Please specify both the current file path and new file directory');
          };
          break;

        case 'rv':
          if (args.length) {
            await remove(args.join(' '));
          } else {
            console.log('Invalid input. Please specify a file path');
          };
          break;

        case 'os':
          args.forEach(arg => {
            switch (arg) {
              case '--EOL':
                printEOL();
                break;
              case '--cpus':
                printHost();
                break;
              case '--homedir':
                printHomeDir();
                break;
              case '--username':
                printSystemUserName();
                break;
              case '--architecture':
                printCPUArch();
                break;
            }
          })
          break;

        case 'hash':
          if (args.length) {
            await calcHash(args.join(' '));
          } else {
            console.log('Invalid input. Please specify a file path');
          }
          break;

        case 'compress':
          if (args.length >= 2) {
            await compress(args[0], args[1]);
          } else {
            console.log('Invalid input. Please specify both the source file path and destination file path');
          };
          break;

        case 'decompress':
          if (args.length >= 2) {
            await decompress(args[0], args[1]);
          } else {
            console.log('Invalid input. Please specify both the source file path and destination file path');
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
