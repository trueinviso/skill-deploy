import Rails from "rails-ujs"
import Turbolinks from "turbolinks"
import ReactRailsUJS from "../../../javascript/ReactRailsUJS"

// console.log('componentRequireContext',componentRequireContext)

Turbolinks.start()
window.Turbolinks = Turbolinks
ReactRailsUJS.detectEvents() // Must be called _after_ turbolinks starts
Rails.start()


/* Enable to measure turbolinks visit time */
// require("helpers/measureTurbolinksVisitTiming")
