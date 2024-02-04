import { rename } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const rn = async(filePath, newFileName) => {
  try {
    const newFilePath = join(dirname(filePath), newFileName);

    await rename(filePath, newFilePath);
  } catch (error) {
    console.error('Error renaming file: ', error.message);
  }
};

export default rn;
