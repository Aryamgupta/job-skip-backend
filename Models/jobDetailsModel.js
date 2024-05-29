const mongoose = require("mongoose");

const jobModel = mongoose.Schema(
  {
    jobTitle: { type: "String", trim: true },
    jobRole: { type: "String", trim: true },
    qualification:{ type: "String", trim: true },
    batch:{type: "String", trim: true},
    jobDescription: { type: "String", trim: true},
    jobLocation: { type: "String", trim:true},
    jobExpectedSalary: { type: "String", trim: true,default:"As Per Industry Standards"},
    jobExperince:{type:"String"},
    companyWebsite:{type:"String", trim:true},
    applyLink:{type:"String",trim:true},
    jobJD:{ type: "Object"},
    postedDate:{type:"Date"},
    lastDate:{type:"Date"},
  }
);

const JobDetails = mongoose.model("JobDetails", jobModel);

module.exports = JobDetails;