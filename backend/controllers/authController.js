import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const regjistrohu = async (req, res) => {
  try {
    const { emri, email, password } = req.body;

    const ekzistonUser = await User.findOne({ email });

    if (ekzistonUser) {
      return res.status(400).json({
        message: "Përdoruesi ekziston."
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      emri,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Regjistrimi u krye me sukses",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const hyr = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Email ose fjalëkalim i pasaktë"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Email ose fjalëkalim i pasaktë"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        roli: user.roli
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        emri: user.emri,
        email: user.email,
        roli: user.roli
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
