const express = require('express');
const router = express.Router();
const controller = require("./controller");

router
.post('/', controller.create);

router
.get('/', controller.getAll);

router
.get('/:id', controller.getDataById);

router
.patch('/:id', controller.updateDataById);

router
.delete('/:id', controller.delete);


module.exports = router;