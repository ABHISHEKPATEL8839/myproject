import * as YUP from 'yup'
let AdminSchema = YUP.object({
    name : YUP.string().required("*"),
    username : YUP.string().required("*"),
    password : YUP.string().required("*"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "*").required("*"),
})

export default AdminSchema;