import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
};

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        })
    }

    //Bearer 980989asdgasdg8908dsfg98a9d0f8g098
    // [0] Bearer
    // [1] 980989asdgasdg8908dsfg98a9d0f8g098
    // , ignora a primeira e a segunda salva na variavel token
    const [ , token ] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
        
        request.user_id = sub;
        
        return next();
        
    } catch(err) {
        return response.status(401).json({ errorCode: "token.expired" })
    }

};