import * as YUP from 'yup'
let UpdateProfileSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Incorrect Email Id").required("Insert Your Email Id"),
    contact : YUP.number().typeError("Only Number are accepted").min(1000000000, "Number Not Less Then 10").max(9999999999, "Number not more then 10").required("Insert Contact Number"),
    address : YUP.string().required("Insert Full Address"),
    gender : YUP.string().required("Select Your Gender"),
    city : YUP.string().required("Select Your City"),
})

export default UpdateProfileSchema