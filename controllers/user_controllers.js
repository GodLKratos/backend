const Register = require("../models/regModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserController {
  static registration = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);
      const uniqueEmail = await Register.findOne({ email: email });
      if (uniqueEmail != null) {
        res.send({
          "message":"Email Already exist"
        });
      } else {
        const User = new Register({
          name: name,
          email: email,
          password: hashpassword,
        });
        const token = jwt.sign({id:User._id},process.env.SECRET_KEY);
        await User.save();
        res.send({
          "message":"Welcome to dashboard",
          "token":token,
          "id":User._id
        });
      }
    } catch (e) {
      res.send({
        "message":"Something Wrong",
      });
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const storeEmail = await Register.findOne({ email: email });
      if (email == null) {
        res.send({
          "message":"Invalid Credential"
        });
      } else {
        try{
          let isMatch = await bcrypt.compare(password, storeEmail.password);
          if (isMatch) {
            //const token = jwt.sign({id:User._id},process.env.SECRET_KEY);
            res.send({
              "message":"Welcome to dashboard",
              "token":token,
              "id":storeEmail._id
            });
          } else {
            res.send({
              "message":"Invalid Credential"
            });
          }
        }
        catch(e){
          res.send({
            "message":"Invalid Credential"
          });
        }

      }
    } catch (err) {
      res.send({
        "message":"Something Wrong",
      });
    }
  };
}


module.exports = UserController;
