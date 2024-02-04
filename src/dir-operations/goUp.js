import { dirname } from 'node:path';
import { getCurrentDir } from '../utilities/utilities.js';
import { chdir } from 'node:process';

const goUp = () => {
  const currentDir = getCurrentDir();
  const parentDir = dirname(currentDir);

  if (currentDir !== parentDir) {
    chdir(parentDir);
  }

  console.log(`You are currently in ${getCurrentDir()}`);
};

export default goUp;