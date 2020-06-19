import express from "express";
import BaseController from "../utils/BaseController";
import { photosService } from "../services/PhotosService";
import auth0provider from "@bcwdev/auth0provider";

export class PhotosController extends BaseController {
    constructor() {
        super("api/photos");
        this.router
            .get("", this.getAll)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            // .use(auth0provider.isAuthorized)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            //only gets boards by user who is logged in
            let data = await photosService.getAll()
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creatorId = req.user.sub;
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
}
