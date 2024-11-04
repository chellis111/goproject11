const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { generateToken, verifyToken } = require("../helpers/jwtHelpers");
const { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, JWT_SECRET } = require("../config/index");


//  user login controller function
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        const userWithEmailExists = await User.findOne({ email });

        if (!userWithEmailExists) {
            return res.status(404).json({ error: "User with email doesn't exist" });
        } 
        
        if (!userWithEmailExists.isVerified) {
            return res.status(403).json({ error: "User account is not verified" });
        }

        const passwordMatch = await bcrypt.compareSync(password, userWithEmailExists?.password);

        if (!passwordMatch) {
            return res.status(403).json({ error: "Invalid login credentials" });
        }

        const jwtPayload = {
            email: userWithEmailExists._email,
            userId: userWithEmailExists._id,
            firstName: userWithEmailExists.firstName,
            lastName: userWithEmailExists.lastName,
        };

        // generate refresh token
        const refreshToken = generateToken(jwtPayload, JWT_SECRET, REFRESH_TOKEN_EXPIRES_IN);

        // generate access token
        const accessToken = generateToken(jwtPayload, JWT_SECRET, ACCESS_TOKEN_EXPIRES_IN);

        // cookie options
        const cookieOptions = {
            expires: new Date(Date.now() + 3000),
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            samSite: "none",
            secure: true,
        };


        res.status(200).cookie( "accessToken", accessToken, cookieOptions ).json({ message: "user logged in successfully", refreshToken });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// Logout user controller functiin
const logoutUser = async (req, res) => {
    try {
        res.clearCookie("accessToken").status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// generate new acces token controller function
const generateAccessToken = async (req, res) => {
    try {
        const refreshToken = req.headers["authorization"];

        if (!refreshToken) {
            return res.status(403).json({ error: "Unauthorized" });
        }

        if(refreshToken.split(" ")[0] !== "Bearer"){
            return res.status(403).json({ error: "Invalid token" });
        }

        const Payload = verifyToken(refreshToken.split(" ")[1], JWT_SECRET);

        if (!Payload) {
            return res.status(403).json({ error: "Invalid token" });
        }

        // access token payload
        const jwtPayload = {
            userId: Payload.userId,
            firstName: Payload.firstName,
            lastName: Payload.lastName,
        }

        const accessToken = generateToken(jwtPayload, JWT_SECRET, ACCESS_TOKEN_EXPIRES_IN);

         // cookie options
         const cookieOptions = {
            expires: new Date(Date.now() + 3000),
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            samSite: "none",
            secure: true,
        };

        return res.status(200).cookie("accessToken", accessToken, cookieOptions).json({ message: "success" });
    } catch(error) {
        res.status(500).json({ error: "Server Error" });
    }
};


module.exports = { loginUser, logoutUser, generateAccessToken };