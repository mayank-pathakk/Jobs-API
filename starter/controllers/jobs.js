const Job = require("../models/Job");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const userId = req.user.userId;
  const jobs = await Job.find({ createdBy: userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.userId;
  const job = await Job.findOne({ createdBy: userId, _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job found`);
  }
  res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.userId;
  const job = await Job.findOneAndRemove({ createdBy: userId, _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job found`);
  }
  res.status(StatusCodes.OK).send();
};

const updateJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.userId;
  const job = await Job.findOneAndUpdate(
    { createdBy: userId, _id: jobId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!job) {
    throw new NotFoundError(`No job found`);
  }
  res.status(StatusCodes.CREATED).json({ job });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
