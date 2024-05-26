import { QuestionCollection } from "inquirer";
import { Answers } from "./interface";

export const questions: QuestionCollection<Answers> = [
  {
    type: "input",
    name: "directory",
    message: "Qual diretório?",
  },
  {
    type: "list",
    name: "language",
    message: "Qual linguagem?",
    choices: ["TypeScript", "JavaScript"],
  },
  {
    type: "list",
    name: "packageStructure",
    message: "Qual estrutura de pastas?",
    choices: ["Package by type", "Package by feature(recommended)"],
  },
  {
    type: "list",
    name: "database",
    message: "Qual banco de dados?",
    choices: ["MySql", "PostgreSQL", "MongoDB"],
  },
  {
    type: "list",
    name: "docker",
    message: "Deseja utilizar Docker na Aplicação?",
    choices: ["yes", "no"],
  },
];

