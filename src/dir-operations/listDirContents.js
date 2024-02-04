import { getCurrentDir } from "../utilities/utilities.js";
import { readdir } from 'node:fs/promises';

const listDirContents = async() => {
  const dirPath = getCurrentDir();

  try {
    const entries = await readdir(dirPath, { withFileTypes: true });

    const dirContents = entries.map((entry) => {
      const type = entry.isDirectory() ? 'directory' : 'file';
      return {
        Name: entry.name,
        Type: type
      };
    });

    dirContents.sort((a, b) => {
      if (a.Type === b.Type) {
        return a.Name.localeCompare(b.Name);
      }
      return a.Type === 'directory' ? -1 : 1;
    });

    console.table(dirContents);
  } catch {
    console.error('Error listing directory contents: ', error.message);
  }
};

export default listDirContents;
