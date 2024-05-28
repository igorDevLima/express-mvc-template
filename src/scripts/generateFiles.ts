
import { packageJson } from "../contents/packageJson.js";
import { Answers } from "config/questions/interface.js";
import { asyncWriteFile } from "functions/asyncWriteFile.js";

export const generateFiles = async (answers: Answers) => {
  try {
    await asyncWriteFile(
      `${answers.directory}/package.json`,
      packageJson(answers.language)
    );
  } catch (err) {
    console.error(err);
  }
};
