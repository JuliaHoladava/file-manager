import { argv, cwd } from 'node:process';

export const getArgValue = (argName) => {
  const args = argv.slice(2);
  const arg = args.find(arg => arg.startsWith(`--${argName}=`));
  return arg ? arg.split('=')[1] : null;
};
