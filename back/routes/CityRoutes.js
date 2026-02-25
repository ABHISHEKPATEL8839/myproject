import express from 'express';
import { DoPayment, GetAllCity, SendMail } from '../controllers/CityController.js';
let routes = express.Router();

routes.get("/", GetAllCity);
routes.get("/sendmail", SendMail)
routes.get("/payment", DoPayment)

export default routes;
