import { string } from "prop-types"
import React from "react"
import useSWR from "swr"
import Applier from "./Applier"
import styles from "./styles.module"

const Applicants = ({ apiPath, profilePath }) => {
  const { data: appliers } = useSWR(apiPath)

  return (
    <div className={styles.list}>
      {appliers?.data.map(applier => (
        <Applier
          key={applier.id}
          {...applier}
          profilePath={profilePath.replace("id", applier.id)}
        />
      ))}
    </div>
  )
}

Applicants.propTypes = {
  apiPath: string.isRequired
}

export default Applicants
