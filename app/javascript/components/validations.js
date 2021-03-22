import validator from "~/helpers/validator"
import attachEvent from "~/helpers/attachEvent"

const VALIDATION_ATTR = "data-validate"

const noop = () =>{}

const createValidator = el => {
  const method = el.dataset.validateMethod
  const event = el.dataset.validateEvent
  const id = el.id

  const handler = validator[method]

  if (handler && event) {
    return attachEvent(
      event,
      handler.bind(validator,`#${id}`),
      el
    )
  }

  return noop
}

const validations = () => {
  const listeners = [...document.querySelectorAll(`[${VALIDATION_ATTR}]`)].map(createValidator)

  return () => {
    listeners.forEach( remove => remove())
  }
}
export default validations
