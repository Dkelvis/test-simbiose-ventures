import { Router } from "express";
import { CreatePersonMiddleware } from "../middlewares/create-person/create-person";
import { CreatePersonRouter } from "../usecase/create-person";
import { GetPersonRouter } from "../usecase/get-person";
import { GetPersonMiddleware } from "../middlewares/get-person/get-person";
import { UpdatePersonRouter } from "../usecase/update-person";
import { UpdatePersonMiddleware } from "../middlewares/update-person/update-person";

const personRouter = Router();

const createPersonMiddleware = new CreatePersonMiddleware();
const createPersonRouter = new CreatePersonRouter();

personRouter.post(
  "/pessoa",
  createPersonMiddleware.middleware,
  createPersonRouter.create
);

const getPersonRouter = new GetPersonRouter();
const getPersonMiddleware = new GetPersonMiddleware();

personRouter.get(
  "/pessoa/:id",
  getPersonMiddleware.middleware,
  getPersonRouter.get
);

const updatePersonRouter = new UpdatePersonRouter();
const updatePersonMiddleware = new UpdatePersonMiddleware();

personRouter.put(
  "/pessoa/:id",
  updatePersonMiddleware.middleware,
  updatePersonRouter.update
);

export { personRouter };
