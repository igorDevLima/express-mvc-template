import { fsAsync } from "../config/fs.js";

export const asyncWriteFile = async (
  writeDirectory: string,
  content: string
) => {
  return await fsAsync.writeFile(writeDirectory, content);
};
