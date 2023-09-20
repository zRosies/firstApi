const express= require('express');
const router = express.Router();

const contactsData= require('../controllers/contactsData');

router.get('/',contactsData.getAllData);

router.get('/:id', contactsData.getSingleData);

module.exports= router;