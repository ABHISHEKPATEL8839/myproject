import express from 'express'
import { Auth } from '../controllers/AdminAuthController.js';
let routes = express.Router();

routes.post("/", Auth);

export default routes;