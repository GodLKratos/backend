const Register = require("../models/regModel");
const bcrypt = require("bcryptjs");

class UserController {
  static registration = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);
      const uniqueEmail = await Register.findOne({ email: email });
      if (uniqueEmail != null) {
        res.send("Email Already exist");
      } else {
        const User = new Register({
          name: name,
          email: email,
          password: hashpassword,
        });
        await User.save();
        res.send("Welcome to dashboard");
      }
    } catch (e) {
      res.send("error");
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const storeEmail = await Register.findOne({ email: email });
      if (email == null) {
        res.send("Invalid Credential");
      } else {
        let isMatch = await bcrypt.compare(password, storeEmail.password);
        if (isMatch) {
          res.send("Welcome to dashboard");
        } else {
          res.send({
            "name":"galat"
          });
        }
      }
    } catch (err) {
      res.send("something wrong");
    }
  };
}

module.exports = UserController;
