import Rails from "rails-ujs"
import Turbolinks from "turbolinks"
import ReactRailsUJS from "../../../javascript/ReactRailsUJS"
import { onEachTurbolinksPage } from "~/helpers/turbolinks"
import alert from "~/components/alert"
import formValidator from "~/components/form-validator/form-validator"
import form from "~/components/form"
import modal from "~/components/microModal"
import flashMessages from "~/components/flashMessages"
Turbolinks.start()
window.Turbolinks = Turbolinks
ReactRailsUJS.detectEvents() // Must be called _after_ turbolinks starts
Rails.start()
onEachTurbolinksPage(alert)
onEachTurbolinksPage(formValidator)
onEachTurbolinksPage(form)
onEachTurbolinksPage(modal)
onEachTurbolinksPage(flashMessages)
