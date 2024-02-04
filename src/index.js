import { getArgValue, getCurrentDir } from './utilities/utilities.js';
import cliHandler from './cli/cliHandler.js';
import { homedir } from 'node:os';
import { chdir } from 'node:process';

const initApp = () => {
  const username = getArgValue('username');
  const homeDir = homedir();

  if (username) {
    chdir(homeDir);
    console.log(`Welcome to the File Manager, ${username}!`);
    console.log(`You are currently in ${getCurrentDir()}`);
    cliHandler(username);
  } else {
    console.log('Invalid input. Username was not provided!');
  }
};

initApp();
