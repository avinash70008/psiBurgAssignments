const mongoose = require("mongoose")

const productslist = new mongoose.Schema({
    Authors:"",
     Name:"",
      Age:"",
     Date_Of_Birth:"",
    Books: "",
    Name:"",
     Published_On:"",
      Price:""
},
{
    versionKey : false,
    timestamps : true
}
)

const ProductsList = mongoose.model("productslist", productsList);

module.exports = ProductsList