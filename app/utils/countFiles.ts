import fs from 'node:fs';
import path from 'node:path';

export function countFilesInFolder(folderPath: string): number {
  try {
    const fullPath = path.join(process.cwd(), folderPath);
    const files = fs.readdirSync(fullPath);
    return files.length;
  } catch (error) {
    console.error('Error reading folder:', error);
    return 0;
  }
}

export function getListImagesFromFolder(
  folderPath: string,
  resultPath: string
): string[] {
  const pathJoin = path.join(process.cwd(), folderPath);
  const files = fs.readdirSync(pathJoin);

  return files.map((name) => `${resultPath}/${name}`);
}
