import * as YUP from 'yup';

let SubCateSchema = YUP.object({
    name : YUP.string().required("*"),
    categoryId : YUP.string().required("*")
})

export default SubCateSchema;