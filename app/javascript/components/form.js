import attachEvent from "~/helpers/attachEvent"

const TRIGGER_EVENT_FORM_SELECTOR = "form-submit-trigger-event"



function form() {
  const forms = [
    ...document.querySelectorAll(`[data-${TRIGGER_EVENT_FORM_SELECTOR}]`)
  ].map(form => {
    const event = form.getAttribute(`data-${TRIGGER_EVENT_FORM_SELECTOR}`)

    if (event) {
      return attachEvent(
        event,
        () => {
          form.submit()
        },
        form
      )
    }
    return () => {}
  })

  return function cleanupForm() {
    forms.forEach(remove => {
      remove()
    })
  }
}

export default form
