import express from 'express';
import { Payment, Confirm, GetAllOrderByUserId, GetAllOrder, GetAllDelivered, ChangeStatus, GetAllOutForDel, GetAllPlacedOrder, GetAllShipped } from '../controllers/OrderController.js'
import IsUserLoggedIn from '../util/IsUserLoggedIn.js'
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
let routes = express.Router();

routes.post("/payment", IsUserLoggedIn, Payment);
routes.post("/confirm", IsUserLoggedIn, Confirm);
routes.get("/getall", IsUserLoggedIn, GetAllOrderByUserId);


routes.get("/getallorder", IsAdminLoggedIn, GetAllOrder);
routes.get("/getallpalced", IsAdminLoggedIn, GetAllPlacedOrder);
routes.get("/getalldevelivered", IsAdminLoggedIn, GetAllDelivered);
routes.get("/getalloutfordel", IsAdminLoggedIn, GetAllOutForDel);
routes.get("/getallshipped", IsAdminLoggedIn, GetAllShipped);

routes.put("/changestatus/:id", IsAdminLoggedIn, ChangeStatus)

export default routes;