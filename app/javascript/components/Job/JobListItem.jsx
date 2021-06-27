import { array, func, string, number, bool } from "prop-types"
import React from "react"
import FavoriteJobIcon from "./FavoriteJobIcon"
import emptyImg from "./../../../assets/font/icon/empty_photo_state_icon_3x.svg"
import checkIcon from "./../../../assets/font/icon/check.svg"
import checkAppliedIcon from "./../../../assets/font/icon/check_applied.svg"
import classnames from "classnames"

const JobListItem = ({
  id,
  companyName,
  name,
  jobRoles,
  jobTypes,
  jobExperiences,
  jobLocations,
  favorites,
  thumbnailUrl,
  appliedFors
}) => {
  const thumbnailClass = () => {
    return emptyThumbnailIcon()
      ? "employer-job-card__image_empty"
      : "image_present"
  }

  const imageWrapperClass = () => {
    return emptyThumbnailIcon() ? "" : "employer-job-card__image--avatar"
  }
  const isNoImg = thumbnailUrl.includes("empty_photo_state_icon")

  return (
    <a href={`/jobs/${id}`}>
      <div className="job-card -with-favorite">
        <div
          className={classnames(
            "job-card__image",
            isNoImg ? "-empty" : "-present"
          )}
        >
          {!isNoImg ? <img src={thumbnailUrl} alt="job-logo" /> : null}
        </div>
        <div className="job-card__favorite-check-container">
          <FavoriteJobIcon key={id} favorites={favorites} job_id={id} />
          {appliedFors.includes(id) && (
            <img src={checkAppliedIcon} alt="check-icon" />
          )}
        </div>

        <div className="job-card__header">
          <div className="job-card__header__title">{name}</div>
          <div className="job-card__header__sub-title">{companyName}</div>
        </div>
        <div className="job-card__types">
          {jobRoles.map(jobRole => (
            <div
              key={jobRole.id || jobRole.name}
              className="job-card__type-mark -dark"
            >
              {jobRole.name}
            </div>
          ))}
          {jobTypes.map(jobType => (
            <div
              key={jobType.id || jobType.name}
              className="job-card__type-mark -dark"
            >
              {jobType.name}
            </div>
          ))}
          {jobExperiences.map(jobExperience => (
              <div
                  key={jobExperience.id || jobExperience.name}
                  className="job-card__type-mark -dark"
              >
                {jobExperience.name}
              </div>
          ))}
          {jobLocations.map(jobLocation => (
              <div
                  key={jobLocation.id || jobLocation.name}
                  className="job-card__type-mark -dark"
              >
                {jobLocation.name}
              </div>
          ))}
        </div>
        {appliedFors.includes(id) && (
          <div className="button job__button">
            <img src={checkIcon} alt="check-icon" />
            Applied
          </div>
        )}
      </div>
    </a>
  )
}

JobListItem.propTypes = {
  companyName: string,
  companyWebsite: string,
  contactEmail: string,
  contactName: string,
  createdAt: string,
  facebook: string,
  id: number,
  instagram: string,
  location: string,
  name: string,
  remote: bool,
  twitter: string,
  updatedAt: string,
  userId: number,
  favorites: array,
  appliedFors: array
}
export default JobListItem
