import { fs, fsAsync } from "../config/fs.js";

export const generateDirectory = async (directoryPath: fs.PathLike) => {
  if (!fs.existsSync(directoryPath)) {
    try {
      await fsAsync.mkdir(directoryPath);
      console.log(`Directory '${directoryPath}' created.`);
    } catch (err) {
      console.log(`Directory '${directoryPath}' creation error: ${err}`);
    }
  } else {
    console.log(`Directory '${directoryPath}' already exists.`);
  }
};
