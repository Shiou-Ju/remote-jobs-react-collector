import React, { useReducer } from "react";
import axios from "axios";
import JobContext from "./jobContext";
import jobReducer from "./jobReducer";
import { FILTER_JOBS, CLEAR_FILTER, JOB_ERROR, GET_JOBS } from "../types";

const JobState = (props) => {
  const initialState = {
    jobs: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(jobReducer, initialState);

  // get contacts
  const getJobs = async () => {
    try {
      const res = await axios.get(
        "https://remote-openings-graphql-server.de.r.appspot.com/graphql?query=%7BjobMany%20%7B%0A%20%20title%0A%20%20company%0A%20%20location%0A%20%20remoteType%0A%20%20dateUpdated%0A%20%20experience%0A%20%20compensation%0A%20%20jobUrl%0A%7D%7D"
      );
      dispatch({ type: GET_JOBS, payload: res.data.data.jobMany });
    } catch (error) {
      console.log(error);
      dispatch({ type: JOB_ERROR, payload: error });
    }
  };

  // filter contacts
  const filterJobs = (text) => {
    dispatch({ type: FILTER_JOBS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        filtered: state.filtered,
        error: state.error,
        filterJobs,
        clearFilter,
        getJobs,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;
