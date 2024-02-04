import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

const calcHash = async(filePath) => {
  const readStream = createReadStream(filePath);
  const hash = createHash('sha256');
  hash.setEncoding('hex');

  try {
    await pipeline(
      readStream,
      hash
    );

    hash.end();
    console.log(hash.read());
  } catch (error) {
    console.error('Error calculating hash is ', error);
  }
};

export default calcHash;
