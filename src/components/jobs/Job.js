import React, { useContext, Fragment, useEffect } from "react";
import { JobItem } from "./JobItem";
import JobContext from "../../context/job/jobContext";

export const Job = () => {
  const jobContext = useContext(JobContext);

  const { jobs, filtered, getJobs } = jobContext;

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, []);

  if (jobs !== null && jobs.length === 0) {
    return <h4>暫無職缺</h4>;
  }

  const displayItems = (job, index) => {
    return (
      <Fragment key={index}>
        <JobItem job={job} />
      </Fragment>
    );
  };

  return (
    jobs && (
      <Fragment>
        {filtered !== null
          ? filtered.map((job, index) => displayItems(job, index))
          : jobs.map((job, index) => displayItems(job, index))}
      </Fragment>
    )
  );
};
