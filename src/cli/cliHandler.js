import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';

const cliHandler = (username) => {
  const rl = createInterface({
    input: stdin,
    output: stdout
  });

  const onUserInput = (input) => {
    if (input.trim() === '.exit') {
      rl.close();
    } else {
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
