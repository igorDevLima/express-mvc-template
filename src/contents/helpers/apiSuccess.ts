export const apiSuccess = (language: string) => `
${language === 'JavaScript' ? `
class SuccessResponse {
    constructor(message, status, resData) {
        this.message = message;
        this.status = status;
        this.resData = resData;
    }

    send(res) {
        return res.status(this.status).json({
            message: this.message,
            data: this.resData,
        });
    }
}

class OKResponse extends SuccessResponse {
    constructor(message, resData) {
        super(message, 200, resData);
    }
}

class CreatedResponse extends SuccessResponse {
    constructor(message, resData) {
        super(message, 201, resData);
    }
}

module.exports = {
    OKResponse,
    CreatedResponse,
};
`: `
import { Response } from "express"
class SuccessResponse {
    message: string;
    status: number;
    resData: Response

    constructor(message: string, status: number, resData: Response) {
        this.message = message;
        this.status = status;
        this.resData = resData;
    }

    send(res: Response) {
        return res.status(this.status).json({
            message: this.message,
            data: this.resData,
        });
    }
}

class OKResponse extends SuccessResponse {
    constructor(message:string, resData: Response) {
        super(message, 200, resData);
    }
}

class CreatedResponse extends SuccessResponse {
    constructor(message:string, resData: Response) {
        super(message, 201, resData);
    }
}

module.exports = {
    OKResponse,
    CreatedResponse,
};
`}
`