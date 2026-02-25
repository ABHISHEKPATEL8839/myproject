import express from 'express'
import { CheckEmail, CheckOtp, ChangePassword} from '../controllers/ForgotPasswordController.js'
let routes = express.Router();

routes.post("/checkemail", CheckEmail);
routes.post("/otp", CheckOtp);
routes.post("/update", ChangePassword);

export default routes;