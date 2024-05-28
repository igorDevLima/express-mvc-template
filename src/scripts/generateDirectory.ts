import {
  failSpinner,
  startSpinner,
  succeedSpinner,
} from "../functions/spinner.js";
import { fs, fsAsync } from "../config/fs.js";

export const generateDirectory = async (directoryPath: fs.PathLike) => {
  if (!fs.existsSync(directoryPath)) {
    const spinner = startSpinner("Creating directory");

    try {
      await fsAsync.mkdir(directoryPath);
      succeedSpinner("Directory created");
    } catch (err) {
      failSpinner("Failed to create directory");
      console.log(`Directory '${directoryPath}' creation error: ${err}`);
    } finally {
      spinner.stop();
    }
  } else {
    console.log(`Directory '${directoryPath}' already exists.`);
  }
};
