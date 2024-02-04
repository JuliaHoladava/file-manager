import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { join, basename, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';

const copy = async(pathToSourceFile, pathToDedDir) => {
  const fileName = basename(pathToSourceFile);
  const fileNewPath = join(pathToDedDir, fileName);

  try {
    await mkdir(resolve(pathToDedDir), { recursive: true });

    await pipeline(
      createReadStream(pathToSourceFile),
      createWriteStream(fileNewPath)
    );
    console.log(`File has been copied to ${fileNewPath}`);
  } catch (error) {
    console.error('Error coping file: ', error);
  }
};

export default copy;
