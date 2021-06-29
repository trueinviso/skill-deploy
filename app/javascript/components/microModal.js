import MicroModal from "micromodal"

const PAGE_LOAD_MODAL_DATA_SELECTOR = "trigger-modal"

const modal = () => {
  let latestModal

  const handleShow = modal => {
    latestModal = modal
  }

  const handleClose = modal => {
    console.log(modal, "has been hidden")
  }

  const settings = {
    onShow: handleShow,
    onClose: handleClose,
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    debugMode: false
  }

  const getMicroModalSettings = () => ({
    onShow: handleShow,
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    debugMode: false
  })

  MicroModal.init(settings)

  const pageLoadModal = document.querySelector(
    `[data-${PAGE_LOAD_MODAL_DATA_SELECTOR}]`
  )

  const shouldShowPageLoadModal = pageLoadModal && pageLoadModal.id

  if (shouldShowPageLoadModal) {
    MicroModal.show(pageLoadModal.id, getMicroModalSettings())
  }

  return function cleanup() {
    const shouldCloseLatestModal = latestModal && latestModal.id
    if (shouldCloseLatestModal) {
      MicroModal.close(latestModal.id)
    }
  }
}

export default modal
