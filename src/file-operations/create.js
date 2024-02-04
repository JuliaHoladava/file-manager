import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getCurrentDir } from '../utilities/utilities.js';

const create = async (newFileName) => {
  try {
    const newFilePath = join(getCurrentDir(), newFileName);
    await writeFile(newFilePath, '');
  } catch (error) {
    console.error('Error creating file: ', error.message);
  }
};

export default create;
