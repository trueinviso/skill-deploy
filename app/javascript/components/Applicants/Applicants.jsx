import { string } from "prop-types"
import React from "react"
import useSWR from "swr"
import Applicant from "./Applicant"
import styles from "./styles.module"

const Applicants = ({ apiPath, profilePath }) => {
  const { data: applicants } = useSWR(apiPath)

  return (
    <div className={styles.list}>
      {applicants?.data.map(applicant => (
        <Applicant
          key={applicant.id}
          {...applicant}
          profilePath={applicant.links.profile_url}
        />
      ))}
    </div>
  )
}

Applicants.propTypes = {
  apiPath: string.isRequired
}

export default Applicants
