import ReactRailsUJS from "react_ujs"
import buildRequireContextFromObject from "./helpers/buildRequireContextFromObject"
import * as ujsComponents from "./ujsComponents"

ReactRailsUJS.useContext(buildRequireContextFromObject(ujsComponents))

export default ReactRailsUJS
