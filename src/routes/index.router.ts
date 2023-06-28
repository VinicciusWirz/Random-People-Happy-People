import { Router } from "express";
import personRouter from "./person.router";

const indexRouter = Router();

indexRouter.use(personRouter);

export default indexRouter;
