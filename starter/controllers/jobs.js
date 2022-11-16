const Job = require("../models/Job");
const { BadRequestError } = require("../errors");
const notFound = require("../middleware/not-found");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const userId = req.user.userId
  const jobs = await Job.find({createdBy : userId}).sort("createdAt")
  res.status(StatusCodes.OK).json({jobs , count : jobs.length})
};
const getJob = async (req, res) => {
  res.send("Get job"); 
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const deleteJob = async (req, res) => {
  res.send("Delete job");
};
const updateJob = async (req, res) => {
  res.send("Update job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
