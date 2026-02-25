import {
    SaveAdmin,
    GetAllAdmin,
    GetAllAdminById,
    UpdateAdmin,
    DeleteAdmin,
    UpdatePassAdmin,
    GetLoggedInAdmin
} from '../controllers/AdminController.js'

import express from 'express';

let routes = express.Router();

routes.get("/", GetAllAdmin)
routes.get("/getadmin", GetLoggedInAdmin)
routes.get("/:id", GetAllAdminById)
routes.post("/", SaveAdmin)
routes.put("/updatepassword/:id", UpdatePassAdmin)
routes.put("/:id", UpdateAdmin)
routes.delete("/:id", DeleteAdmin)

export default routes;