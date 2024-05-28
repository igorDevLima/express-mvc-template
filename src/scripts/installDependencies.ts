import { Answers } from "config/questions/interface";
import { exec } from "node:child_process";

export const installDependencies = async (answers: Answers) => {
  const databaseDependency =
    answers.database === "MySql"
      ? "mysql2"
      : answers.database === "PostgreSQL"
      ? "pg"
      : "mongoose";

  const tsDevDependencies = `@types/node ts-node typescript`;

  const dependencies = `express joi express-async-errors ${databaseDependency}`;
  const devDependencies = `nodemon ${
    answers.language === "TypeScript" && tsDevDependencies
  }`;

  try {
    exec(
      `npm install ${dependencies} && npm install -D ${devDependencies}`,
      { cwd: answers.directory as string },
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
