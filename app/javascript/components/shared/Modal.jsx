import React, { Fragment } from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import cx from "classnames"

const Modal = ({ children, openBtnClassName, openModalBtnText, ...props }) => {
  const [isOpen, setOpen] = React.useState(false)
  const ref = React.useRef(null)

  const onOpen = React.useCallback(() => setOpen(true), [])
  const onClose = React.useCallback(() => setOpen(false), [])

  return (
    <Fragment>
      <button onClick={onOpen} className={cx(openBtnClassName)}>
        {openModalBtnText}
      </button>
      <ReactModal
        appElement={ref.current}
        isOpen={isOpen}
        onRequestClose={onClose}
        {...props}
      >
        {children({ isOpen, onClose, onOpen })}
      </ReactModal>
      <div ref={ref} />
    </Fragment>
  )
}

Modal.defaultProps = {
  contentLabel: "Modal",
  openModalBtnText: "Open modal"
}
Modal.propTypes = {
  children: PropTypes.func,
  contentLabel: PropTypes.string,
  className: PropTypes.string,
  openBtnClassName: PropTypes.string,
  openModalBtnText: PropTypes.string,
  portalClassName: PropTypes.string,
  overlayClassName: PropTypes.string
}

export default Modal
