import React from 'react'

function Social({ handler, state }) {
  return(
    <div>
      <div className="secondary-heading">
        Social Profiles
      </div>
      <Twitter state={state} handler={handler} />
      <Facebook state={state} handler={handler} />
      <LinkedIn state={state} handler={handler} />
      <Dribbble state={state} handler={handler} />
      <Github state={state} handler={handler} />
      <CodePen state={state} handler={handler} />
      <Medium state={state} handler={handler} />
      <Behance state={state} handler={handler} />
      <Instagram state={state} handler={handler} />
      <Vimeo state={state} handler={handler} />
      <SubmitField />
    </div>
  );
}

function Twitter({ handler, state }) {
  return(
    <div className="text-field">
      <label>
        Twitter
        <input type="text"
          value={ state.twitter || "" }
          onChange={ handler }
          id="twitter"
        />
      </label>
    </div>
  );
}

function Facebook({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Facebook
        <input
          value={ state.facebook || "" }
          onChange={ handler }
          id="facebook"
        />
      </label>
    </div>
  );
}

function LinkedIn({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        LinkedIn
        <input
          value={ state.linked_in || "" }
          onChange={ handler }
          id="linked_in"
        />
      </label>
    </div>
  );
}

function Dribbble({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Dribbble
        <input
          value={ state.dribbble || "" }
          onChange={ handler }
          id="dribbble"
        />
      </label>
    </div>
  );
}

function Github({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Github
        <input
          value={ state.github || "" }
          onChange={ handler }
          id="github"
        />
      </label>
    </div>
  );
}

function CodePen({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Codepen
        <input
          value={ state.codepen || "" }
          onChange={ handler }
          id="codepen"
        />
      </label>
    </div>
  );
}

function Medium({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Medium
        <input
          value={ state.medium || "" }
          onChange={ handler }
          id="medium"
        />
      </label>
    </div>
  );
}

function Behance({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Behance
        <input
          value={ state.behance || "" }
          onChange={ handler }
          id="behance"
        />
      </label>
    </div>
  );
}

function Instagram({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Instagram
        <input
          value={ state.instagram || "" }
          onChange={ handler }
          id="instagram"
        />
      </label>
    </div>
  );
}

function Vimeo({ state, handler }) {
  return(
    <div className="text-field">
      <label>
        Vimeo
        <input
          value={ state.vimeo || "" }
          onChange={ handler }
          id="vimeo"
        />
      </label>
    </div>
  );
}

function SubmitField() {
  return(
    <div className="submit-field">
      <button>Save</button>
    </div>
  );
}

export default Social
