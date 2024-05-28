import {
  failSpinner,
  startSpinner,
  succeedSpinner,
} from "../functions/spinner.js";
import { fsAsync } from "../config/fs.js";
import { Answers } from "../config/questions/interface.js";

export const generatePackageType = async (answers: Answers) => {
  const spinner = startSpinner("Creating package structure");

  const rootDir = answers.directory === "" ? "." : answers.directory;

  try {
    // make src
    await fsAsync.mkdir(`${rootDir}/src`);

    // make common
    await fsAsync.mkdir(`${rootDir}/src/common`);

    await fsAsync.mkdir(`${rootDir}/src/common/helpers`);

    await fsAsync.mkdir(`${rootDir}/src/common/middlewares`);

    await fsAsync.mkdir(`${rootDir}/src/common/db`);

    //make package pattern
    if (answers.packageStructure === "Package by type") {
      await fsAsync.mkdir(`${rootDir}/src/controllers`);
      await fsAsync.mkdir(`${rootDir}/src/repositories`);
      await fsAsync.mkdir(`${rootDir}/src/routes`);

      answers.database != "MySql" &&
        await fsAsync.mkdir(`${rootDir}/src/models`);
    } else {
      await fsAsync.mkdir(`${rootDir}/src/user`);
    }

    succeedSpinner("Directory created");
  } catch (err) {
    failSpinner("Failed to create directory");
    console.log(`Directory '${answers.directory}' creation error: ${err}`);
  } finally {
    spinner.stop();
  }
};
