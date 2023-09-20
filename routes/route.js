const express= require("express");

const contacts= require("../controllers/contactsData");

const router= express.Router();

router.use("/contacts", require("./contacts"));

module.exports=router;
