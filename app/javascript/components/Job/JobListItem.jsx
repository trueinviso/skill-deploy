import { string, number, bool } from "prop-types";
import React from "react";
import activeIcon from "./../../../assets/font/icon/save-active.svg";
import inactiveIcon from "./../../../assets/font/icon/save-inactive.svg";
import emptyImg from "./../../../assets/font/icon/empty_photo_state_icon_3x.svg";

const JobListItem = ({ id, company_name, name, job_types, liked }) => {
  return (
    <a href={`/jobs/${id}`}>
      <div className="job-card">
        <div className="image_small job-card__image">
          <img
            src={emptyImg}
            className="employer-job-card__image_empty"
            alt="job-logo"
          />
        </div>
        <div className="job-card__favorite-icon">
          <button>
            <img src={liked ? activeIcon : inactiveIcon} alt="favorite-icon" />
          </button>
        </div>
        <div className="job-card__details">
          <div className="header job-card__header">{name}</div>
          <div className="job-card__company-name">{company_name}</div>
        </div>
        <div className="job-card__types">
          {job_types.map(jobType => (
            <div
              key={jobType.id || jobType.name}
              className="button button_theme_grey job-card__button"
            >
              {jobType.name}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

JobListItem.propTypes = {
  company_name: string,
  company_website: string,
  contact_email: string,
  contact_name: string,
  created_at: string,
  facebook: string,
  id: number,
  instagram: string,
  location: string,
  name: string,
  remote: bool,
  twitter: string,
  updated_at: string,
  user_id: number,
  liked: bool
};
export default JobListItem;
