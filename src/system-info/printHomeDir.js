import { homedir } from 'os';

const printHomeDir = () => {
  console.log(`The current user's home directory is ${homedir()}`);
};

export default printHomeDir;
