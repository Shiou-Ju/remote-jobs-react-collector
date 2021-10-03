import React, { useContext, useRef, useEffect } from "react";
import JobContext from "../../context/job/jobContext";

export const JobFilter = () => {
  const jobContext = useContext(JobContext);
  const { filtered, clearFilter, filterJobs } = jobContext;

  // initializing useRef hook
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (event) => {
    if (text.current.value !== "") {
      filterJobs(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="篩選工作"
        onChange={onChange}
      />
    </form>
  );
};
