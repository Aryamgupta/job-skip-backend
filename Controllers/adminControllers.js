const asynchHandler = require("express-async-handler");
 const Admin = require("../Models/adminModel");

const bcrypt = require("bcryptjs");
const generateToken = require("../Config/genrateToken");
// @description   to sign up a Admin
// @route   POST /api/Admin
// @access  Unprotected
const registerAdmin = asynchHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // error for entries are missing
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  

  //   check if Admin already exists
  const AdminExist = await Admin.findOne({ email });
  if (AdminExist) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const admin = await Admin.create({ email, name, password });

  if (Admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// @description   to login in
// @route   POST /api/Admin/login
// @access  Unprotected
const authAdmin = asynchHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
    // res.status(201).json(Admin);
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});
// to create bycrpt string
const createPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

module.exports = { registerAdmin, authAdmin };