import express from 'express';
import {SaveCategory, UpdateCategory, GetAllCategoryAndSubCate, DeleteCategory, GetAllCategory, GetAllCategoryById} from '../controllers/CategoryController.js'
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
let routes = express.Router();

routes.get("/", GetAllCategory);
routes.get("/subcate", GetAllCategoryAndSubCate);
routes.get("/:id", GetAllCategoryById);


routes.post("/", IsAdminLoggedIn, SaveCategory);
routes.put("/:id", IsAdminLoggedIn, UpdateCategory);
routes.delete("/:id", IsAdminLoggedIn, DeleteCategory);

export default routes;