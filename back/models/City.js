import mongoose from '../config/db.js'

const CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"});

const City = mongoose.model("city", CitySchema);

export default City;