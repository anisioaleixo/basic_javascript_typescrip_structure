import express from 'express'
import { ApiController } from './controller/ApiController';

const apiController = new ApiController();

const routes = express.Router();

routes.get('/', apiController.index);

export default routes;