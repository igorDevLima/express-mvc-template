
import { packageJson } from "../contents/packageJson.js";
import { Answers } from "config/questions/interface.js";
export const generateFiles = async (answers: Answers) => {
  try {
      `${answers.directory}/package.json`,
      packageJson(answers.language)
    );
  } catch (err) {
    console.error(err);
  }
};
