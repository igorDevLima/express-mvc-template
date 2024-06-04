import { PathLike } from "fs";
import { fsAsync } from "../config/fs.js";

const makeSrcDirectory = async (rootDir: PathLike) => {
  await fsAsync.mkdir(`${rootDir}/src`);
};

const makeCommonDirectory = async (rootDir: PathLike) => {
  await fsAsync.mkdir(`${rootDir}/src/common`);

  await fsAsync.mkdir(`${rootDir}/src/common/helpers`);

  await fsAsync.mkdir(`${rootDir}/src/common/middlewares`);

  await fsAsync.mkdir(`${rootDir}/src/common/db`);
};

const makePackageByTypeDirectory = async (
  rootDir: PathLike,
  isMySql: boolean
) => {
  await fsAsync.mkdir(`${rootDir}/src/controllers`);
  await fsAsync.mkdir(`${rootDir}/src/repositories`);
  await fsAsync.mkdir(`${rootDir}/src/routes`);

  isMySql === true && (await fsAsync.mkdir(`${rootDir}/src/models`));
};

const makePackageByFeatureDirectory = async (rootDir: PathLike) => {
  await fsAsync.mkdir(`${rootDir}/src/user`);
};

export {
  makeSrcDirectory,
  makeCommonDirectory,
  makePackageByTypeDirectory,
  makePackageByFeatureDirectory,
};
