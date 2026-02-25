// import {FRONT_API_URL} from '../config/config.js'

let WelcomeMailBody = `<div>
        <img src="${process.env.FRONT_API_URL}/images/logo.png" style="height: 50px; width: 150px;" />
        <br />
        <h1 style="text-align: center; font-family: Arial, Helvetica, sans-serif;">Welcome to Famms.com</h1>
        <p style="font-size: 22px; text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis itaque omnis quaerat voluptatem laudantium nam animi dolor expedita, blanditiis consectetur doloribus, ratione repellat eaque eligendi? Veniam ut ullam nulla.</p>
        <p style="text-align: center;">

            <a style="background-color: #FF424D; padding: 10px 40px; color : #fff; font-family: Arial, Helvetica, sans-serif; text-decoration: none; font-size: 25px; border-radius: 10px;" href="${process.env.FRONT_API_URL}">Visit</a>
        </p>
    </div>`;
export default WelcomeMailBody;