import express from 'express'
import CityRoutes from './CityRoutes.js'
import UserRoutes from './UserRoutes.js'
import CategoryRoutes from './CategoryRoutes.js'
import SubCategoryRoutes from './SubCategoryRoutes.js'
import UserAuthRoutes from './UserAuthRoute.js'
import ProfileRoutes from './ProfileRoutes.js'
import AdminAuthRoutes from './AdminAuthRoutes.js'
import ProductRoutes from './ProductRoutes.js'
import IsUserLoggedIn from '../util/IsUserLoggedIn.js'
import AdminRoutes from './AdminRoutes.js'
import IsAdminLoggedIn from '../util/IsAdminLoggedIn.js'
import ForgotPasswordRoutes from './ForgotPasswordRoutes.js'
import OrderRoutes from './OrderRoutes.js'


let routes = express.Router();

routes.use("/api/v1/city", CityRoutes);
routes.use("/api/v1/user", UserRoutes);
routes.use("/api/v1/category", CategoryRoutes);
routes.use("/api/v1/subcategory", SubCategoryRoutes);
routes.use("/api/v1/auth", UserAuthRoutes);
routes.use("/api/v1/profile", IsUserLoggedIn ,ProfileRoutes);
routes.use("/api/v1/adminauth", AdminAuthRoutes);
routes.use("/api/v1/product", ProductRoutes);
routes.use("/api/v1/admin", IsAdminLoggedIn ,AdminRoutes);
routes.use("/api/v1/forgotpassword", ForgotPasswordRoutes);
routes.use("/api/v1/order", OrderRoutes);


export default routes;