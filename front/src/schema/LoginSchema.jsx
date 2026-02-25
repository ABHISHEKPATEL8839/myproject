import * as YUP from 'yup';

let LoginSchema = YUP.object({
    email : YUP.string().email("Email Id Incorrect").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password")
})

export default LoginSchema;