import { array, func, string, number, bool } from "prop-types"
import React from "react"
import FavoriteJobIcon from "./FavoriteJobIcon"
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
  const isNoImg = thumbnailUrl.includes("empty_photo_state_icon")

  const types = React.useMemo(
    () => jobRoles.concat(jobTypes).concat(jobExperiences).concat(jobLocations),
    [id]
  )

  const isApplied = appliedFors.includes(id)

  return (
    <a href={`/jobs/${id}`}>
      <div className="job-card -with-favorite">
        <div className="job-card__header">
          <div
            className={classnames(
              "job-card__image",
              isNoImg ? "-empty" : "-present"
            )}
          >
            {!isNoImg ? <img src={thumbnailUrl} alt="job-logo" /> : null}
          </div>
          <div className="job-card__title-section">
            <div className="job-card__header__title">{name}</div>
            <div className="job-card__header__sub-title">{companyName}</div>
          </div>
          <div className="job-card__favorite-check-container">
            <FavoriteJobIcon key={id} favorites={favorites} job_id={id} />
            {isApplied ? (
              <img
                className="hide-tablet-up mr-0"
                src={checkAppliedIcon}
                alt="check-icon"
              />
            ) : null}
          </div>
        </div>

        <div className="job-card__types">
          {types.map((type, index) => (
            <div key={index} className="job-card__type-mark">
              {type.name}
            </div>
          ))}
          {isApplied ? (
            <div
              style={{ minWidth: 91, marginLeft: "auto" }}
              className="job-card__type-mark -dark hide-flex-tablet-down"
            >
              <img src={checkIcon} alt="check-icon" />
              <span>Applied</span>
            </div>
          ) : null}
        </div>
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
