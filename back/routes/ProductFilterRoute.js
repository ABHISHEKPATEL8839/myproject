import express from 'express'
import { GetAllProduct } from '../controllers/ProductFiterController.js';
let routes = express.Router();

routes.get("/", GetAllProduct)

export default routes;