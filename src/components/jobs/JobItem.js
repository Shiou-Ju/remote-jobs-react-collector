import React from "react";
import PropTypes from "prop-types";

export const JobItem = ({ job }) => {
  const {
    title,
    company,
    location,
    remoteType,
    dateUpdated,
    experience,
    compensation,
    jobUrl,
  } = job;

  return (
    <div className="bg-light card">
      <h3 className="text-primary text-left">{title} </h3>
      <ul className="list">
        {company && (
          <li>
            公司：<i className="fas fa-envelope-open"></i> {company}
          </li>
        )}
        {location && (
          <li>
            地點：<i className="fas fa-envelope-open"></i> {location}
          </li>
        )}
        {remoteType && (
          <li>
            遠端形態<i className="fas fa-envelope-open"></i> {remoteType}
          </li>
        )}
        {dateUpdated && (
          <li>
            職缺更新時間：<i className="fas fa-envelope-open"></i> {dateUpdated}
          </li>
        )}
        {compensation && (
          <li>
            待遇：<i className="fas fa-envelope-open"></i> {compensation}
          </li>
        )}
        {experience && (
          <li>
            經驗要求：<i className="fas fa-envelope-open"></i> {experience}
          </li>
        )}
        {jobUrl && (
          <li>
            原始連結：<i className="fas fa-envelope-open"></i> {jobUrl}
          </li>
        )}
      </ul>
    </div>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
};
