import { PathLike } from "fs";

export interface Answers {
    directory: PathLike,
    language: string,
    packageStructure: string,
    database: string,
    docker: string,
}