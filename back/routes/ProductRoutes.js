import express from 'express';
import {SaveProduct, DeleteAllProduct, GetAllProductByIdForEdit, UploadImage, UpdateProduct, DeleteProduct, GetAllProduct, GetAllProductById} from '../controllers/ProductController.js'
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
let routes = express.Router();

routes.get("/", GetAllProduct);
routes.get("/deleteall", DeleteAllProduct);
routes.get("/edit/:id", GetAllProductByIdForEdit);
routes.get("/:id", GetAllProductById);

routes.post("/",IsAdminLoggedIn, SaveProduct);
routes.put("/uploadimage/:id", IsAdminLoggedIn, UploadImage)
routes.put("/:id", IsAdminLoggedIn, UpdateProduct);
routes.delete("/:id", IsAdminLoggedIn, DeleteProduct);


export default routes;