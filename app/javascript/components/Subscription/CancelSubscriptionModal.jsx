import PropTypes from "prop-types"
import React, { Fragment } from "react"
import heyfamFetch from "./../../helpers/heyfamFetch"
import Modal from "./../shared/Modal"

const CancelSubscriptionModal = ({ apiPath }) => {
  const [processing, setProcessing] = React.useState(false)
  const onCancelSubscription = React.useCallback(async () => {
    try {
      setProcessing(true)
      await heyfamFetch(apiPath)
    } finally {
      setProcessing(false)
    }
  }, [])
  return (
    <React.Fragment>
      <Modal
        openModalBtnText="Cancel subscription"
        openBtnClassName="button -outline subscription__cancel-subscription"
        contentLabel="Cancel Subscription modal"
        portalClassName="subscription__cancel-modal"
        overlayClassName="subscription__cancel-modal__overlay"
        className="subscription__cancel-modal__content"
      >
        {({ onClose }) => (
          <Fragment>
            <div className="subscription__cancel-modal__content__header">
              <button className="close-button -round -black" onClick={onClose} />
            </div>
            <div className="subscription__cancel-modal__content-wrapper">
              <div className="subscription__cancel-modal__content__title">
                Are you sure you want to cancel your subscription?
              </div>
              <div className="subscription__cancel-modal__content__text">
                By closing your account you will lose access
                to all Skill Deploy talent and listings.
              </div>
            </div>

            <div className="subscription__cancel-modal__content__footer">
              <button
                disabled={processing}
                onClick={onClose}
                className="button"
              >
                Keep my subscription
              </button>
              <button
                disabled={processing}
                className="button button_theme_black"
                onClick={() => onCancelSubscription().finally(onClose)}
              >
                Cancel subscription
              </button>
            </div>
          </Fragment>
        )}
      </Modal>
    </React.Fragment>
  )
}

CancelSubscriptionModal.propTypes = {
  apiPath: PropTypes.string
}

export default CancelSubscriptionModal
