import { string } from "prop-types"
import React from "react"
import { SWRConfig } from "swr"
import heyfamFetch from "../../helpers/heyfamFetch"
import Applicants from "./Applicants"

const ApplicantsModal = ({ apiPath, profilePath }) => {
  return (
    <SWRConfig
      value={{
        fetcher: heyfamFetch
      }}
    >
      <Applicants apiPath={apiPath} profilePath={profilePath} />
    </SWRConfig>
  )
}

ApplicantsModal.propTypes = {
  apiPath: string,
  profilePath: string
}

export default ApplicantsModal
