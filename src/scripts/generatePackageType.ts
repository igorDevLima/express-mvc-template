import {
  failSpinner,
  startSpinner,
  succeedSpinner,
} from "../functions/spinner.js";
import { Answers } from "../config/questions/interface.js";
import {
  makeCommonDirectory,
  makePackageByFeatureDirectory,
  makePackageByTypeDirectory,
  makeSrcDirectory,
} from "../functions/makeDir.js";

export const generatePackageType = async (answers: Answers) => {
  const spinner = startSpinner("Creating package structure");

  const rootDir = answers.directory === "" ? "." : answers.directory;

  try {
    await makeSrcDirectory(rootDir);

    await makeCommonDirectory(rootDir);

    if (answers.packageStructure === "Package by type") {
      await makePackageByTypeDirectory(
        rootDir,
        answers.database === "MySql" ? true : false
      );
    } else {
      await makePackageByFeatureDirectory(rootDir);
    }

    succeedSpinner("Directory created");
  } catch (err) {
    failSpinner("Failed to create directory");
    console.log(`Directory '${answers.directory}' creation error: ${err}`);
  } finally {
    spinner.stop();
  }
};
