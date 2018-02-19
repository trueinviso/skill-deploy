import React from 'react'

function Search({ submitHandler }) {
  return(
    <div className="small-6 columns" id="search-form">
      <form onSubmit={submitHandler}>
        <div className="search-field">
          <input type="text" placeholder="Search" id="search" />
          <span className="search-icon">&#9906;</span>
        </div>
        <input type="submit" value="Search" id="search-submit" />
      </form>
    </div>
  );
}

export { Search }
