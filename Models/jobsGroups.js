const mongoose = require("mongoose");

const jobsGroupsModel = mongoose.Schema(
  {
    jobsType:{
        type:"String",
        required:true
    },
    jobs : [{
        type: mongoose.Schema.Types.ObjectId, // Reference to ObjectId
        ref: 'JobDetails' // Model to refer to (optio
    }]
  }
);

const JobsGroups = mongoose.model("JobsGroups", jobsGroupsModel);

module.exports = JobsGroups;