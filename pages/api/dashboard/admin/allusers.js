import nextConnect from "next-connect";
import User from "../../../../models/UserModel";
import db from "../../../../utils/db";


const handler = nextConnect();

handler.get(async (req, res) => {
    console.log("hit the get request")

    const { page, limit } = req.query;
    console.log(page, limit, "page and limit")
    const pageInt = parseInt(page)
    const limitInt = parseInt(limit)


    await db.connect();
    try {
        const users = await User.find({}).skip(pageInt * limitInt).limit(limitInt).lean()
        console.log(users, "from server")
        await db.disconnect()
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }

})

export default handler;