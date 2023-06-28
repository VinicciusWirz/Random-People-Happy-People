import { Router } from "express";
import * as personController from "../controllers/person.controller";

const personRouter = Router();

personRouter.get("/person", personController.getRandomPerson);

export default personRouter;
