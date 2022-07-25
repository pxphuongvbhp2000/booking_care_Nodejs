import express from "express";
import homController from "../controllers/homeController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homController.getHomePage);

    return app.use("/", router);
}

module.exports = initWebRoutes;