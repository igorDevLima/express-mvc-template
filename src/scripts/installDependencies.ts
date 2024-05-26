import { fs } from "config/fs";
import { exec } from "node:child_process";

export const installDependencies = async (
  directoryPath: fs.PathLike,
  language: string,
  database: string
) => {
  const tsDevDependencies = `@types/node ts-node typescript`;

  const dependencies = `express joi express-async-errors`;
  const devDependencies = `nodemon ${
    language === "TypeScript" && tsDevDependencies
  }`;

  try {
    exec(
      `npm install ${dependencies} && npm install -D ${devDependencies}`,
      { cwd: directoryPath as string },
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      }
    );
  } catch (err) {
    console.log("Installing dependencies errot: " + err);
  }
};
