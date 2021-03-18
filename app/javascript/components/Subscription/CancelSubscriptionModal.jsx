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
        openModalBtnText="Cancel"
        openBtnClassName="button button_theme_black cancel-subscription"
        contentLabel="Cancel Subscription modal"
        portalClassName="subscription__cancel-modal"
        overlayClassName="subscription__cancel-modal__overlay"
        className="subscription__cancel-modal__content"
      >
        {({ onClose }) => (
          <Fragment>
            <div className="subscription__cancel-modal__content__header">
              <h1 className="subscription__cancel-modal__content__header__title">
                Before you go
              </h1>
              <button className="close-icon" onClick={onClose} />
            </div>
            <hr />
            <p>
              We're sad to see you go. Before you do, we wanted to make sure
              you're aware that by selecting to cancel your paid subscription:
              <br /> <br />
              <small>
                &bull; You will not be charged when it is time to renew your
                account.
              </small>
              <br />
              <small>
                &bull; You will still have access to media until your
                subscription expires.
              </small>
              <br />
              <small>
                &bull; You will automatically be moved to a free account when
                your subscription expires so you can continue to enjoy Sunday
                Services at Bethel.
              </small>
              <br />
              <small>
                &bull; Any discounts currently applied to your subscription will
                no longer be valid.
              </small>
            </p>
            <div className="subscription__cancel-modal__content__footer">
              <button
                disabled={processing}
                className="button button_theme_primary"
                onClick={() => onCancelSubscription().finally(onClose)}
              >
                Yes,cancel
              </button>
              <button
                disabled={processing}
                onClick={onClose}
                className="button button_theme_black"
              >
                Go back
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
