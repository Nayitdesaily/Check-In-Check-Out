const express = require('express');

const {
  getAllRegistration,
  createRegistration,
  updatedRegistration,
  deleteRegistration,
  getWorkerRegistration,
} = require('../controllers/registration.controller');

const registrationRouter = express.Router();

//Read Endpoint
registrationRouter.get('/', getAllRegistration);
registrationRouter.get('/:id', getWorkerRegistration);

//Create Endpoint
registrationRouter.post('/', createRegistration);

//Update Endpoint
registrationRouter.patch('/:id', updatedRegistration);

//Delete Endpoint
registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };
