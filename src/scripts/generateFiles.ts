import { Answers } from "../config/questions/interface.js";
import { asyncWriteFile } from "../functions/asyncWriteFile.js";

//contents
import { packageJson } from "../contents/packageJson.js";
import { envExample } from "../contents/envExample.js";
import { gitIgnore } from "../contents/gitIgnore.js";
import { dockerFile } from "../contents/docker.js";
import { app } from "../contents/app.js";

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
