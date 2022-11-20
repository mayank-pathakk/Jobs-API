const express = require("express");
const router = express.Router();

const {
    getAllJobs,
    getJob,
    createJob,
    deleteJob,
    updateJob,
} = require('../controllers/jobs')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').delete(deleteJob).patch(updateJob).get(getJob)

module.exports = router