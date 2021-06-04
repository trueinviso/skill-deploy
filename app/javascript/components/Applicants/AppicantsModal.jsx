import { string } from "prop-types"
import React from "react"
import Modal from "../shared/Modal"
import { SWRConfig } from "swr"
import heyfamFetch from "../../helpers/heyfamFetch"
import Applicants from "./Applicants"
import styles from "./styles.module"
import cx from "classnames"

const ApplicantsModal = ({ apiPath, profilePath, openBtnClassName }) => {
  return (
    <SWRConfig
      value={{
        fetcher: heyfamFetch
      }}
    >
      <Modal
        openBtnClassName={openBtnClassName}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Applicants"
        openModalBtnText="Applicants"
      >
        {({ onClose }) => (
          <React.Fragment>
            <div className={styles.header}>
              <button
                className={cx("close-button -black -round", styles.close)}
                onClick={onClose}
              ></button>
            </div>
            <div className={styles.body}>
              <h1 className={styles.title}>Applicants</h1>
              <Applicants apiPath={apiPath} profilePath={profilePath} />
            </div>
          </React.Fragment>
        )}
      </Modal>
    </SWRConfig>
  )
}

ApplicantsModal.propTypes = {
  apiPath: string,
  profilePath: string
}

export default ApplicantsModal
