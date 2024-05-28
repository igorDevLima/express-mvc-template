import loading from "loading-cli";

const spinner = (options?: loading.Options | string) =>
  loading(options).start();

const startSpinner = (text: string) => {
  return spinner({
    text: text,
  });
};

const succeedSpinner = (text: string) => {
  return spinner({
    text: text,
    color: "green",
  }).succeed();
};

const failSpinner = (text: string) => {
  return spinner({
    text: text,
    color: "red",
  }).fail();
};

export { startSpinner, succeedSpinner, failSpinner };
