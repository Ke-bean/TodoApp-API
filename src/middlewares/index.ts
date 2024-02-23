import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const sessionToken = req.cookies("Kebean-AUTH");
        if(!sessionToken){
            return res.sendStatus(403);
        }
        const existringUser = await getUserBySessionToken(sessionToken);
        if(!existringUser){
            return res.sendStatus(403)
        }
        merge(req, { identity: existringUser });
        return next();
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}