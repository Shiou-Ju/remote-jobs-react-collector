import React from "react";
import { JobFilter } from "../jobs/JobFilter";
import { Job } from "../jobs/Job";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <JobFilter />
      </div>
      <div>
        <Job />
      </div>
    </div>
  );
};

export default Home;
