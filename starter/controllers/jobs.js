const getAllJobs = async (req, res) => {
  res.send("Get all the jobs");
};
const getJob = async (req, res) => {
  res.send("Get job");
};
const createJob = async (req, res) => {
  res.send("Create job");
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
