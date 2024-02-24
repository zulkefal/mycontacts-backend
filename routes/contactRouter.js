const express= require('express');
const router= express.Router();
const { validateToken } = require('../middleware/validateTokenHandler');


const {createContact,getContact,getContacts,deleteContact,updateContact} = require('../controllers/contactController');
router.use(validateToken)
router.route("/").get(getContacts).post(createContact);;
router.route("/:id").post(createContact).get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;