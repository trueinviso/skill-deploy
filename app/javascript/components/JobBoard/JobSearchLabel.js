import React from 'react'

function JobSearchLabel({ search, clearSearch }) {
  function renderLabel() {
    if(search != "") {
      return(
        <div
          className="small-12 columns jobs-index__search-result"
          onClick={clearSearch}
        >
          <ul>
            <div>
              <li>
                {search}
                <span className="erase-query">x</span>
              </li>
            </div>
          </ul>
        </div>
      )
    } else {
      return ""
    }
  }
  return renderLabel()
}

export { JobSearchLabel }
