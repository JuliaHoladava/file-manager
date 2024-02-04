import { EOL } from 'node:os';

const printEOL = () => {
  console.log(`Default system End-Of-Line is ${EOL.replace(/\n/g, '\\n').replace(/\r/g, '\\r')}`);
}

export default printEOL;
