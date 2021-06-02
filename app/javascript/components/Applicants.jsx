import { array, string } from "prop-types"
import React from "react"
import Modal from "./shared/Modal"

const Applicants = ({ title, buttonTitle, appliers }) => {
  return (
    <Modal
      contentLabel="Applicants"
      openModalBtnText={buttonTitle}
    >
      {({ onClose }) => (
        <React.Fragment>
          <div>
            <button onClick={onClose} >
            </button>
          </div>
          <h1>
            Applicants
          </h1>
            {appliers.map(applier => (
              <li key={applier.id}>{applier.id}{applier.first_name}</li>
            ))}
          <div>
          </div>
        </React.Fragment>
      )}
    </Modal>
  )
}

Applicants.propTypes = {
  title: string.isRequired,
  buttonTitle: string.isRequired,
  appliers: array.isRequired,
}

export default Applicants
