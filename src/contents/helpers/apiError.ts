export const apiError = (language: string) => `
${language === "JavaScript" ?
    `
class ApiError extends Error {  
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

class ConflictError extends ApiError {
  constructor(message) {
    super(message, 409);
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  ConflictError,
};
`
    :
    `
class ApiError extends Error {
  status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

class ConflictError extends ApiError {
  constructor(message) {
    super(message, 409);
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  ConflictError,
};`}


`;