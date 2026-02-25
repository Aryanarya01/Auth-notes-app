import mongoose,{Document,Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});

const User = mongoose.model("User",userSchema);
r