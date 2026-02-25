import express from 'express'
import {MyProfile, MyProfilePic, UpdateProfile, ChangePassword} from '../controllers/ProfileController.js'
let routes = express.Router();

routes.get("/", MyProfile);
routes.get("/profilepic", MyProfilePic);
routes.put("/", UpdateProfile);
routes.put("/changepassword", ChangePassword);

export default routes;