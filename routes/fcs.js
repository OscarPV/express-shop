const express = require('express');

const fcsController = require('../controllers/fcs');

const router = express.Router();

router.get('/fcs/', fcsController.index);
router.get('/fcs/crear', fcsController.create);
router.post('/fcs/crear', fcsController.store);
router.get('/fcs/editar/:id', fcsController.edit);
router.post('/fcs/editar/:id', fcsController.update);
router.post('/fcs/eliminar/:id', fcsController.destroy);

exports.routes = router;