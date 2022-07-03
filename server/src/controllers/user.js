import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    // Check values are not empty
    if (!name || !email || !password) {
        res.status(400).json({ msg: "Please enter all fields" });
    }
    //Check if user already exists
    User.findOne({ email }).then((users) => {
        if (users) return res.status(400).json({ msg: "User already exists" });
    });
    // create user
    const user = new User({ name, email, password });
    // Encrypt password
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
    }
    // Save user
    user.save()
        .then(() => res.json({ message: "User created successfully" }))
        .catch((err) => res.status(400).json({ error: err }));

}

const login = async (req, res) => {
    const { email, password } = req.body;
    // Check values are not empty
    if (!email || !password) {
        res.status(400).json({ msg: "Please enter all fields" });
    }
    // Find user by email
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });
        // Create JWT
        const payload = {
            id: user._id,
            name: user.name,
            email: user.email,
        };           // Sign token
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: payload,
                });
            }
        );
    });
}



export { signup,login }