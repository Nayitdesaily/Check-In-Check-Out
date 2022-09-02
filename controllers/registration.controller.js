const { Worker } = require('../models/registration.model');

//Get all worker's registration of the company
const getAllRegistration = async (req, res) => {
  try {
    const workers = await Worker.findAll();

    res.status(200).json({
      status: 'success',
      data: { workers },
    });
  } catch (error) {
    console.log(error);
  }
};

const getWorkerRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findOne({ where: { id } });

    if (!worker) {
      return res.status(404).json({
        status: 'error',
        message: 'worker not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { worker },
    });
  } catch (error) {
    console.log(error);
  }
};

//Set the entrance time of the worker
const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newWorker = await Worker.create({ entranceTime });

    res.status(201).json({
      status: 'success',
      data: { newWorker },
    });
  } catch (error) {
    console.log(error);
  }
};

//Set exit time and status of the worker
const updatedRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    const worker = await Worker.findOne({ where: { id } });

    if (!worker) {
      return res.status(404).json({
        status: 'error',
        message: 'Worker not found',
      });
    }

    await worker.update({ exitTime, status: 'out' });

    res.status(200).json({
      status: 'success',
      data: { worker },
    });
  } catch (error) {
    console.log(error);
  }
};

//Set status to cancelled
const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const worker = await Worker.findOne({ where: { id } });

    if (!worker) {
      return res.status(404).json({
        status: 'error',
        message: 'Worker not found',
      });
    }

    await worker.update({ status: 'cancelled' });
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistration,
  createRegistration,
  updatedRegistration,
  deleteRegistration,
  getWorkerRegistration,
};
