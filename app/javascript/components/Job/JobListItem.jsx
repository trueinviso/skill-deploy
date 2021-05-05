import { array, func, string, number, bool } from "prop-types"
import React from "react"
import FavoriteJobIcon from "./FavoriteJobIcon"
import emptyImg from "./../../../assets/font/icon/empty_photo_state_icon_3x.svg"
import checkIcon from "./../../../assets/font/icon/check.svg"

const JobListItem = ({
  id,
  companyName,
  name,
  jobTypes,
  favorites,
  thumbnailUrl
}) => {
  const thumbnailClass = () => {
    return emptyThumbnailIcon()
      ? "employer-job-card__image_empty"
      : "image_present"
  }

  const imageWrapperClass = () => {
    return emptyThumbnailIcon() ? "" : "employer-job-card__image--avatar"
  }

  const emptyThumbnailIcon = () => {
    return thumbnailUrl.includes("empty_photo_state_icon")
  }

  return (
    <a href={`/jobs/${id}`}>
      <div className="job-card">
        <div className={"employer-job-card__image " + imageWrapperClass()}>
          <img src={thumbnailUrl} className={thumbnailClass()} alt="job-logo" />
        </div>
        <FavoriteJobIcon key={id} favorites={favorites} job_id={id} />
        <div className="job-card__details">
          <div className="header job-card__header">{name}</div>
          <div className="job-card__company-name">{companyName}</div>
        </div>
        <div className="job-card__types">
          {jobTypes.map(jobType => (
            <div
              key={jobType.id || jobType.name}
              className="button button_theme_grey job-card__button"
            >
              {jobType.name}
            </div>
          ))}
        </div>
        <div className="job-card__applied-state">
          <img src={checkIcon} alt="check-icon" />
          <div>Applied</div>
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
  favorites: array
}
export default JobListItem
