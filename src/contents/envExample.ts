export const envExample = (database: string) => `
NODE_ENV=development 

API_PORT=

${
  database === "MySql"
    ? `
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_PORT=
MYSQL_DB=`
    : database === "PostgreSQL"
    ? `
POSTGRES_DB=
POSTGRES_PASSWORD=
POSTGRES_USER=
POSTGRES_PORT=
`
    : `MONGODB_URI=`
}
`;
