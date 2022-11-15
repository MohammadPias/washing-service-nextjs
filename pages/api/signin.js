import nextConnect from "next-connect";
import User from "../../models/UserModel";
import { signToken } from "../../utils/auth";
import db from "../../utils/db";
import { onError } from "../../utils/error"
import bcrypt from "bcryptjs"


const handler = nextConnect({ onError })

handler.post(async (req, res) => {
    // console.log(req.body, "from body")
    await db.connect();
    const { email, password } = req.body;

    try {
        const existUser = await User.findOne({ email: email })
        // console.log(existUser)
        await db.disconnect();
        if (existUser?.email === email) {
            const checkPass = await bcrypt.compare(password, existUser.password);
            // console.log(checkPass, "isMatch")
            if (checkPass) {
                const token = signToken(existUser);

                res.status(200).json({
                    token,
                    _id: existUser._id,
                    name: existUser.name,
                    email: existUser.email,
                    isAdmin: existUser.isAdmin,
                    role: existUser.role,
                    avatar: "",
                })
            } else {
                res.status(401).send({ message: "Password does not match!" })
            }


        } else {
            res.status(401).send({ message: "User not found, please sign up!" })
            // console.log("email does not existUser")


        }
    } catch (err) {
        res.status(401).send({ message: err })
    }

})

export default handler;