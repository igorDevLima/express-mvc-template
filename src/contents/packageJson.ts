export const packageJson = (language: string) =>
  `
{
    "name": "projectName",
    "version": "1.0.0",
    "description": "generated with express-mvc-api-rest-template",
    "main": "index.js",
    "scripts": {
      "start": "${
        language === "JavaScript"
          ? "node --env-file=.env src/server.js"
          : "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/server.ts"
      }",
      "dev": "${
        language === "JavaScript"
          ? "nodemon --env-file=.env src/server.js"
          : "nodemon --exec node --no-warnings=ExperimentalWarning --loader ts-node/esm src/server.ts"
      }"
    },
    "author": "",
    "license": "ISC"
}
`;
