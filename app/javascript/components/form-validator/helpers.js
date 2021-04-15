import {
  REQUIRD_FIELD_SELECTOR,
  VALIDATION_RULE_FIELD_SELECTOR,
  VALIDATION_ERROR_MESSAGE_FIELD_SELECTOR,
  DISABLED_FIELD_CLASS_NAME
} from "./constants"

export const defaulErrorMessages = {
  url: "Not a valid website url. Should include http or https",
  passwordsMatch: "Passwords don't match",
  required: "Field is required."
}

export function attrHelper(input) {
  return {
    has: name => input?.hasAttribute(`data-${name}`),
    getValue: name => input?.getAttribute(`data-${name}`)
  }
}

export const getValueByName = name => {
  const ele = document.querySelector(`[name="${name}"]:not([type="hidden"])`)
  return attrHelper(ele).getValue("value") || ""
}

export function inputDecorator(input) {
  const attribute = attrHelper(input)
  const isRequired = attribute.has(REQUIRD_FIELD_SELECTOR)
  const hasValidationRule = attribute.has(VALIDATION_RULE_FIELD_SELECTOR)
  const ruleIsNotEmpty = !!attribute.getValue(VALIDATION_RULE_FIELD_SELECTOR)

  const extend = {
    isRequired: () => isRequired,
    shouldBeValidated: () =>
      isRequired || (hasValidationRule && ruleIsNotEmpty),
    hasValidationRule: () => hasValidationRule && ruleIsNotEmpty,
    getRule: () => attribute.getValue(VALIDATION_RULE_FIELD_SELECTOR),
    getErrorMessage: () => {
      return attribute.getValue(VALIDATION_ERROR_MESSAGE_FIELD_SELECTOR)
    },
    isTrix: () => {
      return input?.id?.includes("trix")
    },
    isHidden: input?.type === "hidden"
  }

  return Object.assign(input, extend)
}

export function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  return newNode
}

export const noop = () => undefined

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export function handleSubmitButton(submitter, valid) {
  submitter.disable = !valid
  submitter.classList.toggle(DISABLED_FIELD_CLASS_NAME)
}

export function skipArgs(fn) {
  return () => fn()
}
