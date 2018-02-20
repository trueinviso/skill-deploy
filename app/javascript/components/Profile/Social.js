import React from 'react'

function Social({ user, handler }) {
  return(
    <div>
      <div className="secondary-heading">
        Social Profiles
      </div>
      <Twitter user={user} handler={handler} />
      <Facebook user={user} handler={handler} />
      <LinkedIn user={user} handler={handler} />
      <Dribbble user={user} handler={handler} />
      <Github user={user} handler={handler} />
      <CodePen user={user} handler={handler} />
      <Medium user={user} handler={handler} />
      <Behance user={user} handler={handler} />
      <Instagram user={user} handler={handler} />
      <Vimeo user={user} handler={handler} />
      <SubmitField />
    </div>
  );
}

function Twitter({ handler, user }) {
  return(
    <div className="text-field">
      <label>
        Twitter
        <input type="text"
          value={ user.twitter || "" }
          onChange={ handler }
          id="twitter"
        />
      </label>
    </div>
  );
}

function Facebook({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Facebook
        <input
          value={ user.facebook || "" }
          onChange={ handler }
          id="facebook"
        />
      </label>
    </div>
  );
}

function LinkedIn({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        LinkedIn
        <input
          value={ user.linked_in || "" }
          onChange={ handler }
          id="linked_in"
        />
      </label>
    </div>
  );
}

function Dribbble({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Dribbble
        <input
          value={ user.dribbble || "" }
          onChange={ handler }
          id="dribbble"
        />
      </label>
    </div>
  );
}

function Github({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Github
        <input
          value={ user.github || "" }
          onChange={ handler }
          id="github"
        />
      </label>
    </div>
  );
}

function CodePen({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Codepen
        <input
          value={ user.codepen || "" }
          onChange={ handler }
          id="codepen"
        />
      </label>
    </div>
  );
}

function Medium({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Medium
        <input
          value={ user.medium || "" }
          onChange={ handler }
          id="medium"
        />
      </label>
    </div>
  );
}

function Behance({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Behance
        <input
          value={ user.behance || "" }
          onChange={ handler }
          id="behance"
        />
      </label>
    </div>
  );
}

function Instagram({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Instagram
        <input
          value={ user.instagram || "" }
          onChange={ handler }
          id="instagram"
        />
      </label>
    </div>
  );
}

function Vimeo({ user, handler }) {
  return(
    <div className="text-field">
      <label>
        Vimeo
        <input
          value={ user.vimeo || "" }
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
