import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const mbrojt = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } else {
      return res.status(401).json({
        message: "Nuk je i autorizuar"
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Token i pavlefshëm"
    });
  }
};
export const admin = (req, res, next) => {
  if (req.user && req.user.roli === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "Vetëm admini ka akses"
    });
  }
};

