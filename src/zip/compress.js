import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const compress = async(sourceFilePath, destFilePath) => {
  try {
    await pipeline(
      createReadStream(sourceFilePath),
      createBrotliCompress(),
      createWriteStream(destFilePath)
    );
    console.log(`File has been compressed in ${destFilePath}`);
  } catch (error) {
    console.error('Error compressing file is ', error);
  }
};

export default compress;
