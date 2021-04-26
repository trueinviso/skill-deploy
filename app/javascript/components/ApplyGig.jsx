import { string } from "prop-types"
import React from "react"
import Modal from "./shared/Modal"

const ApplyGig = ({ title, buttonTitle }) => {
  return (
    <Modal
      contentLabel="Send Message"
      openModalBtnText={buttonTitle}
      openBtnClassName="button button_theme_primary"
      portalClassName="job__message-modal"
      overlayClassName="job__message-modal__overlay"
      className="job__message-modal__content"
    >
      {({ onClose }) => (
        <React.Fragment>
          <div className="job__message-modal__content__close-button">
            <button onClick={onClose} className="close-button -round -black">
            </button>
          </div>

          <form className="job__message-modal__content__form">
            <h1 className="job__message-modal__content__title">
              Send a message
            </h1>
            <div>
              <textarea
                className="text-area"
                name="message"
                id="message"
                cols="30"
                rows="10"
              />
            </div>
            <div className="job__message-modal__content__footer">
              <button type="submit" className="button button_theme_primary">
                Send message
              </button>
            </div>
          </form>
        </React.Fragment>
      )}
    </Modal>
  )
}

ApplyGig.propTypes = {
  title: string.isRequired,
  buttonTitle: string.isRequired
}

export default ApplyGig
