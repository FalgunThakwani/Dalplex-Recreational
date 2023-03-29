const express = require('express');
const router = express.Router();

const FacilitiesController = require('../controllers/facilities.controller');
const Auth = require('../middleware/auth');

router.post('/', FacilitiesController.createFacilities);
// router.get('/', FacilitiesController.getFacilities);
router.get('/:id', FacilitiesController.getFacilitiesById);
router.delete('/', FacilitiesController.deleteFacilities);

// router.post('/', Auth.verifyToken, FacilitiesController.createFacilities);
router.get('/', Auth.verifyToken, FacilitiesController.getFacilities);
// router.get('/:id', Auth.verifyToken, FacilitiesController.getFacilitiesById);
router.patch('/:id', Auth.verifyToken, FacilitiesController.updateFacilities);
// router.delete('/', Auth.verifyToken, FacilitiesController.deleteFacilities);

module.exports = router;