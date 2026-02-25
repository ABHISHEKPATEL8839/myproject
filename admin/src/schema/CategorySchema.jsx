import * as Y from 'yup'

let CateSchema = Y.object({
    name : Y.string().required("Insert Categroy Name")
})

export default CateSchema;