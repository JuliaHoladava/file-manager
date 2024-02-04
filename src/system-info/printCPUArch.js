import { arch } from 'os';

const printCPUArch = () => {
  console.log(`The operating system CPU architecture is ${arch()}`);
};

export default printCPUArch;
