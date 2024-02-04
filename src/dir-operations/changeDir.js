import { resolve } from 'node:path';
import { getCurrentDir } from '../utilities/utilities.js';
import { chdir } from 'node:process';

const changeDir = (dedicPath) => {
  try {
    const dedicDir = resolve(getCurrentDir(), dedicPath);
    chdir(dedicDir);
    console.log(`You are currently in ${getCurrentDir()}`);
  } catch (error) {
    console.error('Error changing directory: ', error.message);
  }
};

export default changeDir;
