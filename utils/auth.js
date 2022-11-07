import jwt from "jsonwebtoken"

const signToken = (user) => {
    const newUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        role: user.role,
        avatar: user?.avatar ? user.avatar : "",
    }
    const token = jwt.sign(newUser, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: '1h' });
    return token;
}

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;

    const token = authorization.slice(7, authorization.length);

    jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send({ message: "Token is not valid!" })
        } else {
            req.user = decoded;
            next()
        }
    });
};

const checkAdmin = (req, res, next) => {
    if (req?.user?.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: "Access Denied!" })
    }
};

export { signToken, verifyToken, checkAdmin };