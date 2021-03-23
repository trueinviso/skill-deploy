import Rails from "rails-ujs"
import Turbolinks from "turbolinks"
import ReactRailsUJS from "../../../javascript/ReactRailsUJS"
import { onEachTurbolinksPage } from "~/helpers/turbolinks"
import alert from '~/components/alert'
import validations from '~/components/validations'

// console.log('componentRequireContext',componentRequireContext)

Turbolinks.start()
window.Turbolinks = Turbolinks
ReactRailsUJS.detectEvents() // Must be called _after_ turbolinks starts
Rails.start()
onEachTurbolinksPage(alert)
onEachTurbolinksPage(validations)

/* Enable to measure turbolinks visit time */
// require("helpers/measureTurbolinksVisitTiming")
