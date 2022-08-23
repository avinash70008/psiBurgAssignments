const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    authers_name : { type : String , required:true },
    age : { type : Number , required: true },
    date_of_birth : { type : Number,required: true},
   book_name : { type : String , required: true},
   published_date: {type: Number , required: true},
  price: {type: Number , required: true}
},
{
    versionKey : false,
    timestamps : true
}
)




const books = mongoose.model("books", booksSchema);
module.exports= books;