import Rails from "rails-ujs"
import Turbolinks from "turbolinks"
import ReactRailsUJS from "../../../javascript/ReactRailsUJS"
import { onEachTurbolinksPage } from "~/helpers/turbolinks"
import alert from "~/components/alert"
import formValidator from "~/components/form-validator/form-validator"
import form from "~/components/form"
import modal from "~/components/microModal"
import backButton from "~/components/BackButton"
import changePassword from "~/components/change_password"
import favoriteJob from "~/components/favorite_job"
Turbolinks.start()
window.Turbolinks = Turbolinks
ReactRailsUJS.detectEvents() // Must be called _after_ turbolinks starts
Rails.start()
onEachTurbolinksPage(alert)
onEachTurbolinksPage(formValidator)
onEachTurbolinksPage(form)
onEachTurbolinksPage(modal)
onEachTurbolinksPage(backButton)
onEachTurbolinksPage(changePassword)
onEachTurbolinksPage(favoriteJob)
