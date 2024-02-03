import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { stdout } from 'node:process';

const read = async(filePath) => {
  const fullFilePath = resolve(filePath);
  const readStream = createReadStream(fullFilePath, 'utf8');

  readStream.on('data', (chunk) => {
    stdout.write(chunk);
  });

  readStream.on('end', () => {
    stdout.write('\n');
  });

  readStream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed - file to read does not exist');
    } else {
      console.error('Error reading file:', error.message);
    }
  });
};

export default read;
