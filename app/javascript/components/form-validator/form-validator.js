import { createForm } from "final-form"
import Rails from "rails-ujs"
import createFocusDecorator from "final-form-focus"
import createValidationStrategy from "./validation-strategy"
import {
  TRIGGER_FORM_SELECTOR,
  FORM_ERROR_MESSAGE_CLASS_NAME,
  FORM_FIELD_ERROR_CLASS_NAME,
  INPUT_ATTRIBUTES,
  SKIP_FORM_TRIGGER_VALIDATION
} from "./constants"
import {
  noop,
  inputDecorator,
  insertAfter,
  defaulErrorMessages,
  skipArgs,
  getValueByName,
  attrHelper
} from "./helpers"
import attachEvent from "~/helpers/attachEvent"

const skippedInputTypes = ["submit"]

function handleSubmitButton(submitter, valid) {
  if (valid) {
    submitter.disable = false
    Rails.enableElement(submitter)
  } else {
    submitter.disable = true
  }
}

function createFormWithRules(formEl) {
  const onSubmit = (_, api) => {
    const { valid } = api.getState()
    return Promise.resolve(valid)
  }

  const focusDecorator = createFocusDecorator()
  const form = createForm({
    onSubmit
  })

  const undecorate = focusDecorator(form)
  const formUnsubscribe = form.subscribe(
    () => {
      const submitter = formEl.querySelector('[type="submit"]')
      if (submitter && submitter.disabled) {
        handleSubmitButton(submitter, true)
      }
    },
    {
      valid: true,
      values: true
    }
  )

  let isReadyToSubmit = false

  formEl.addEventListener("click", event => {
    if (attrHelper(event.target).has(SKIP_FORM_TRIGGER_VALIDATION)) {
      observers
        .filter(observer => observer.isRequired)
        .forEach(observer => observer.remove())
      fields
        .filter(field => field.isRequired)
        .forEach(field => field.unregister())
    }
  })

  formEl.addEventListener("submit", async event => {
    handleSubmitButton(event.submitter, false)
    if (isReadyToSubmit) return

    isReadyToSubmit = await form.submit()
    handleSubmitButton(event.submitter, isReadyToSubmit || false)
    if (!isReadyToSubmit) {
      event.preventDefault()
    }
  })

  const registered = {}
  const observers = []

  const radioFields = {}
  function registerField(input, errorContainer) {
    const { name } = input
    const decoratedInput = inputDecorator(input)
    const selectedValue = getValueByName(name)

    const initialValue = selectedValue || input.value

    return form.registerField(
      name,
      fieldState => {
        const { blur, change, error, focus, touched, value } = fieldState

        const onFormChange = event => {
          change(
            input.type === "checkbox"
              ? event.target.checked
              : event.target.value
          )
        }

        if (!radioFields[name] && input.type === "radio") {
          radioFields[name] = true

          attachEvent(
            "input",
            event => {
              if (event.target.name === name) {
                onFormChange(event)
              }
            },
            document
          )
          attachEvent(
            "focus",
            () => {
              if (event.target.name === name) {
                focus()
              }
            },
            document
          )

          attachEvent(
            "blur",
            event => {
              if (event.target.name === name) {
                blur()
              }
            },
            document
          )
        }

        if (!registered[name]) {
          if (input.type === "hidden") {
            const callbackObserver = mutationList => {
              mutationList.forEach(function (mutation) {
                switch (mutation.type) {
                  case "attributes":
                    switch (mutation.attributeName) {
                      case "value":
                        change(mutation.target.value)
                        break
                    }
                    break
                }
              })
            }

            let observer = new MutationObserver(callbackObserver)
            observer.observe(input, {
              attributes: true
            })
            observers.push({
              name: input.name,
              observer,
              isRequired: decoratedInput.isRequired(),
              remove: () => observer.disconnect()
            })
          }

          const isTrix = decoratedInput.isTrix()
          const node = isTrix ? document : input
          attachEvent(isTrix ? "trix-change" : "input", onFormChange, node)
          attachEvent(isTrix ? "trix-blur" : "blur", skipArgs(blur), node)
          attachEvent(isTrix ? "trix-focus" : "focus", skipArgs(focus), node)

          registered[name] = true
        }

        if (input.type === "checkbox") {
          input.checked = value
        } else if (input.type !== "radio") {
          input.value = value === undefined ? "" : value
        }

        // show/hide errors
        if (errorContainer) {
          if (touched && error) {
            errorContainer.innerHTML = error
            input.parentNode.classList.add(FORM_FIELD_ERROR_CLASS_NAME)
          } else {
            errorContainer.innerHTML = ""
            input.parentNode.classList.remove(FORM_FIELD_ERROR_CLASS_NAME)
          }
        }
      },
      {
        value: true,
        error: true,
        touched: true
      },
      {
        initialValue,
        getValidator: () => {
          const isRequired = decoratedInput.isRequired()
          const hasValidationRule = decoratedInput.hasValidationRule()
          const validationRule = decoratedInput.getRule()
          const validator = createValidationStrategy(validationRule)
          const rule = decoratedInput.getRule()

          return (value, _, meta) => {
            if (isRequired && !value) {
              return (
                decoratedInput.getErrorMessage() ||
                defaulErrorMessages["required"]
              )
            } else if (
              hasValidationRule &&
              !validator.validate(value) &&
              meta.dirty
            ) {
              return (
                decoratedInput.getErrorMessage() || defaulErrorMessages[rule]
              )
            }
            return undefined
          }
        }
      }
    )
  }

  const fields = [...formEl].map(input => {
    if (input.name && !skippedInputTypes.includes(input.type)) {
      const errorElement = document.createElement("span")
      errorElement.classList = FORM_ERROR_MESSAGE_CLASS_NAME

      const decoratedInput = inputDecorator(input)

      // reassing data attributes from trix editor to hidden input
      if (decoratedInput.isTrix()) {
        const editor = input.parentNode.querySelector("trix-editor")

        INPUT_ATTRIBUTES.forEach(attr => {
          const value = editor.dataset[attr]
          if (value) {
            input.dataset[attr] = value
          }
        })
      }

      if (decoratedInput.shouldBeValidated()) {
        insertAfter(input, errorElement)
      }

      const unregister = registerField(input, errorElement)
      return {
        name: input.name,
        isRequired: decoratedInput.isRequired(),
        unregister: () => {
          unregister()
          errorElement?.remove()
        }
      }
    }
    return {
      isRequired: false,
      name: input.name,
      unregister: noop
    }
  })

  const config = {
    childList: true,
    subtree: true,
    attributeFilter: ["value"]
  }

  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        const input = mutation.target.querySelector("input:not([readonly])")

        if (input === null) return

        const decoratedInput = inputDecorator(input)

        if (!registered[input.name] && decoratedInput.shouldBeValidated()) {
          const errorElement = document.createElement("span")
          errorElement.classList = FORM_ERROR_MESSAGE_CLASS_NAME
          insertAfter(input, errorElement)
          const unregister = registerField(input, errorElement)
          fields.push({
            name: input.name,
            isRequired: decoratedInput.isRequired(),
            unregister: () => {
              unregister()
              errorElement?.remove()
            }
          })
        }
      }
    }
  }

  const observer = new MutationObserver(callback)
  observer.observe(formEl, config)

  return {
    undecorate,
    form,
    fields,
    formUnsubscribe,
    observer,
    observers
  }
}

function formValidator() {
  const registeredForms = [
    ...document.querySelectorAll(`[data-${TRIGGER_FORM_SELECTOR}]`)
  ].map(createFormWithRules)

  return () => {
    registeredForms.forEach(form => {
      form.observers.forEach(observer => observer.remove())
      form.fields.forEach(field => {
        field.unregister()
      })
      form.observer.disconnect()
      form.undecorate()
      form.formUnsubscribe()
    })
  }
}

export default formValidator
