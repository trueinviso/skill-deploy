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
    console.log("create")
    event.preventDefault()

    let content = this
      .templateTarget
      .innerHTML
      .replace(/NEW_RECORD/g, new Date().getTime())

    this.linksTarget.insertAdjacentHTML("beforebegin", content)
  }
}
