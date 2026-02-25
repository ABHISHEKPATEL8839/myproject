import express from 'express';
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
import { SaveUser, GetAllUser, DeleteAll, ProfilePic, ChangeStatus } from '../controllers/UserController.js';

let routes = express.Router();

routes.post("/", SaveUser);
routes.get("/", IsAdminLoggedIn, GetAllUser)
routes.get("/deleteall", DeleteAll)
routes.put("/profilepic", ProfilePic)
routes.put("/changestatus/:id", ChangeStatus)

export default routes;