import { string } from "prop-types";
import React from "react";
import Modal from "./shared/Modal";

const ApplyGig = ({ title }) => {
  return (
    <Modal
      contentLabel="Send Message"
      openModalBtnText="Apply for this gig"
      openBtnClassName="button button_theme_primary"
      portalClassName="job__message-modal"
      overlayClassName="job__message-modal__overlay"
      className="job__message-modal__content"
    >
      {({ onClose }) => (
        <React.Fragment>
          <h1 className="job__message-modal__content__title">
            Send {title} a message
          </h1>
          <form className="job__message-modal__content__form">
            <div>
              <label htmlFor="message">Message description *</label>
              <textarea
                className="text-area"
                name="message"
                id="message"
                cols="30"
                rows="10"
              />
            </div>
            <div className="job__message-modal__content__footer">
              <button onClick={onClose} className="button button_theme_white">
                Cancel
              </button>
              <button type="submit" className="button button_theme_primary">
                Send message
              </button>
            </div>
          </form>
        </React.Fragment>
      )}
    </Modal>
  );
};

ApplyGig.propTypes = {
  title: string.isRequired
};

export default ApplyGig;
