import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const decompress = async(sourceFilePath, destFilePath) => {
  try {
    await pipeline(
      createReadStream(sourceFilePath),
      createBrotliDecompress(),
      createWriteStream(destFilePath)
    );
    console.log(`File has been decompressed in ${destFilePath}`);
  } catch (error) {
    console.error('Error compressing file is ', error);
  }
};

export default decompress;
