import nextConnect from "next-connect";
import User from "../../models/UserModel";
import { signToken } from "../../utils/auth";
import db from "../../utils/db";
import { onError } from "../../utils/error"
import { encryptPassword } from "../../utils/helper";
import bcrypt from "bcryptjs"


const handler = nextConnect({ onError })

handler.post(async (req, res) => {
    await db.connect();
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const exist = await User.findOne({ email: email })
    console.log(exist)
    if (exist?.email === email) {
        // console.log("email exist")
        res.status(401).send({ message: "Email already exist, please sign in!" })
    } else {
        // console.log("email does not exist")
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            isAdmin: false,
            role: "User"
        });
        // console.log(newUser)
        const user = await newUser.save();
        await db.disconnect();

        // console.log(user, newUser)
        const token = signToken(user);

        res.status(200).json({
            token,
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            role: user.role,
        })
    }

})

export default handler;