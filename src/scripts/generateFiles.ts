import { Answers } from "../config/questions/interface.js";
import { asyncWriteFile } from "../functions/asyncWriteFile.js";

//contents
import { packageJson } from "../contents/packageJson.js";
import { envExample } from "../contents/envExample.js";
import { gitIgnore } from "../contents/gitIgnore.js";
import { dockerFile } from "../contents/docker.js";
import { app } from "../contents/app.js";
import { error } from "../contents/middlewares/error.js";
import { apiError } from "../contents/helpers/apiError.js";
import { connection } from "../contents/database/connection.js";

type TemplateFile = {
  directory: string;
  content: string;
  ignore?: boolean;
}[];

export const generateFiles = async (answers: Answers) => {
  const fileFormat = answers.language === "TypeScript" ? ".ts" : ".js";
  const files: TemplateFile = [
    {
      directory: "/package.json",
      content: packageJson(answers.language),
    },
    {
      directory: "/.env.example",
      content: envExample(answers.database),
    },
    {
      directory: "/.gitignore",
      content: gitIgnore(),
    },
    {
      directory: "/Dockerfile",
      content: dockerFile(),
      ignore: answers.docker === "no" && true,
    },
    {
      directory: `/src/app${fileFormat}`,
      content: app(answers.packageStructure),
    },
    {
      directory: `/src/common/db/connection${fileFormat}`,
      content: connection(answers.database)
    },
    {
      directory: `/src/common/middlewares/error${fileFormat}`,
      content: error()
    },
    {
      directory: `/src/common/helpers/api-error${fileFormat}`,
      content: apiError(answers.language)
    },
  ];

  try {
    files.map(
      async (file) =>
        (file.ignore === undefined || file.ignore === false) &&
        await asyncWriteFile(
          `${answers.directory}${file.directory}`,
          file.content
        )
    );
  } catch (err) {
    console.error(err);
  }
};
