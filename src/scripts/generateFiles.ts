import { fs, fsAsync } from "../config/fs.js";
import { packageJson } from "../contents/packageJson.js";

export const generateFiles = async (
  directoryPath: fs.PathLike,
  language: string
) => {
  try {
    await fsAsync.writeFile(
      `${directoryPath}/package.json`,
      packageJson(language)
    );
  } catch (err) {
    console.error(err);
  }
};
