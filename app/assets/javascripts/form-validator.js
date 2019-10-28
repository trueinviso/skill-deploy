var formValidator = (function(d, finalForm, Rails) {
  /**
   *
   * @param {*} newNode
   * @param {*} referenceNode
   */
  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  /**
   *
   * @param {*} formId
   * @param {*} formConfig
   */
  function registerForm(formId, formConfig) {
    const form = finalForm.createForm({
      /**
       * @description default onSubmit handler
       */
      onSubmit: function() {
        const formEl = d.getElementById(formId);
        formEl.submit();
      },
      ...formConfig
    });

    /**
     * @description attach events after turbolinks is load
     */
    d.addEventListener("turbolinks:load", function() {
      const formElement = d.getElementById(formId);

      if (formElement) {
        formElement.addEventListener("submit", event => {
          event.preventDefault();
          form.submit();
        });

        [...formElement.elements].forEach(input => {
          if (input.name && !["submit", "hidden"].includes(input.type)) {
            registerField(form, input, formElement);
          }
        });

        form.subscribe(() => {
          const btn = formElement.querySelector("[data-disable-with]");

          if (btn && btn.disabled) {
            Rails.enableElement(btn);
          }
        }, []);
      }
    });

    return {
      formApi: form,
      registerErrorElement: elementName =>
        handleErrorElement(elementName, d.getElementById(formId)),
      registerField: input =>
        registerField(form, input, d.getElementById(formId))
    };
  }

  const registered = {};

  function handleErrorElement(elementName, formElement) {
    const errorElementId = elementName + "_error";
    let errorElement = d.getElementById(errorElementId);
    if (errorElement === null) {
      errorElement = d.createElement("span");
      errorElement.setAttribute("id", errorElementId);
      const referenceNode = formElement.querySelector(
        `[name="${elementName}"]`
      );
      insertAfter(errorElement, referenceNode);
    }
    errorElement.classList.add("error-message");

    return errorElement;
  }

  /**
   *
   * @param {*} input
   */
  function registerField(form, input, formElement) {
    const { name } = input;
    form.registerField(
      name,
      fieldState => {
        const { blur, change, error, focus, touched, value } = fieldState;
        const errorElement = handleErrorElement(name, formElement);
        if (!registered[name] || input.type === "radio") {
          // first time, register event listeners

          const inputHandler = event =>
            change(
              input.type === "checkbox" || input.type === "radio"
                ? event.target.checked
                : event.target.value
            );

          input.addEventListener("blur", () => blur());
          input.addEventListener("input", inputHandler);
          input.addEventListener("focus", () => focus());

          registered[name] = true;
        }

        // update value
        if (input.type === "checkbox") {
          input.checked = value;
        } else {
          input.value = value === undefined ? "" : value;
        }

        // show/hide errors
        if (errorElement) {
          if (touched && error) {
            errorElement.innerHTML = error;
            errorElement.style.display = "block";
          } else {
            errorElement.innerHTML = "";
            errorElement.style.display = "none";
          }
        }
      },
      {
        value: true,
        error: true,
        touched: true
      }
    );
  }

  /**
   *
   */
  return {
    registerForm
  };
})(document, window["final-form"], window.Rails);
