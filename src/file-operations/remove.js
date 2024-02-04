import { unlink } from 'node:fs/promises';

const remove = async(filePath) => {
  try {
    await unlink(filePath);
  } catch (error) {
    console.error('Error removing file: ', error);
  }
};

export default remove;
