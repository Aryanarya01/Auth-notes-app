import Jwt from "jsonwebtoken";
import User from "../models/user.js";
export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ message: "Not Authorized!" });
            return;
        }
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            res.status(401).json({ message: "User not found!" });
            return;
        }
        req.user = user;
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Invalid token!" });
    }
};
//# sourceMappingURL=protect.js.map