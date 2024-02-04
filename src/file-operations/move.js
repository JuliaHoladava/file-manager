import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { join, basename } from "node:path";

const move = async(pathToSourceFile, pathToDedDir) => {
  const fileName = basename(pathToSourceFile);
  const fileNewPath = join(pathToDedDir, fileName);

  try {
    await pipeline(
      createReadStream(pathToSourceFile),
      createWriteStream(fileNewPath)
    );
    await unlink(pathToSourceFile);
  } catch (error) {
    console.error('Error moving file: ', error);
  }
};

export default move;
