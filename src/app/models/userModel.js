// initalization of database schema
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email:{
    type:String,
    require:true,
    trim:true,
    lowercase:true,
    unique: true
  },

  password:{
    type:String,
    require: true
  },

  firstName:{
    type:String,
    require:true,
    trim: true
  },

  lastName:{
    type:String,
    require:true,
    trim: true
  },

userRoles:{
  type:String,
  enum:["renter", "buyer", "admin"],
  default: "renter"
},

  phone:{
    type:String,
    require:true,
    trim:true,
    unique: true
  },

}, {timestamps:true})


const User = mongoose.models.user || mongoose.model ("user", userSchema )
export default User

