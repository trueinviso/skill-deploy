// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "links", "template" ]

  connect() {
  }

  create(event) {
    event.preventDefault()

    const content = this
      .templateTarget
      .innerHTML
      .replace(/NEW_RECORD/g, new Date().getTime())

    this.linksTarget.insertAdjacentHTML("beforebegin", content)
  }

  destroy(event) {
    event.preventDefault();
    const wrapper = event.target.closest(".nested-fields")

    if(wrapper.dataset.newRecord === "true") {
      wrapper.remove()
    } else {
      wrapper
        .querySelector("input[name*='_destroy']")
        .value = 1

      wrapper.style.display = "none"
    }
  }
}
