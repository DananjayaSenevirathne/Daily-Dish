import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";


//loging user
constloginUser = async (req, res) => {}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try{

        //check if user already exists
        const exists=await userModel.findOne({ email })
        if(exists){
            return res.status(400).json({ success: false, message: "User already exists" })
        }

        //validate email
        if(!validator.isEmail(email)){
            return res.status(400).json({ success: false, message: "Invalid email" })

        }
        if(password.length<8){
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" })
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

       const user = await newUser.save()

    
    catch(error){
    }





export { loginUser, registerUser }