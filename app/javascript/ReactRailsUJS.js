import ReactRailsUJS from "react_ujs"
import * as ujsComponents from "./ujsComponents"
import buildRequireContextFromObject from "./helpers/buildRequireContextFromObject"

ReactRailsUJS.useContext(buildRequireContextFromObject(ujsComponents))

export default ReactRailsUJS
