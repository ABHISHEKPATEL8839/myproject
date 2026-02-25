import express from 'express';
import {SaveSubCategory, GetAllSubCateByCateId, DeleteAllSubCate, UpdateSubCategory, DeleteSubCategory, GetAllSubCategory, GetAllSubCategoryById} from '../controllers/SubCategoryController.js'
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
let routes = express.Router();

routes.get("/", GetAllSubCategory);

routes.get("/deleteall", DeleteAllSubCate)

routes.get("/getsubcatebycateid/:id", GetAllSubCateByCateId)

routes.get("/:id", GetAllSubCategoryById);

routes.post("/", IsAdminLoggedIn, SaveSubCategory);
routes.put("/:id", IsAdminLoggedIn, UpdateSubCategory);
routes.delete("/:id", IsAdminLoggedIn, DeleteSubCategory);

export default routes;