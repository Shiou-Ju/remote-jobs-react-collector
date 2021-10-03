import { FILTER_JOBS, CLEAR_FILTER, JOB_ERROR, GET_JOBS } from "../types";

const jobReducer = (state, action) => {
  switch (action.type) {
    case FILTER_JOBS:
      return {
        ...state,
        filtered: state.jobs.filter((job) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            job.title.match(regex) ||
            job.company.match(regex) ||
            job.location.match(regex) ||
            job.remoteType.match(regex) ||
            job.experience.match(regex) ||
            job.compensation.match(regex) ||
            job.dateUpdated.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    case JOB_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
