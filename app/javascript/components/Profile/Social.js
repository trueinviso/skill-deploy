import React from 'react'

function Social({ user }) {
  return(
    <div>
      <div className="secondary-heading">
        Social Profiles
      </div>
      <Twitter user={user} />
      <Facebook user={user} />
      <LinkedIn user={user} />
      <Dribbble user={user} />
      <Github user={user} />
      <CodePen user={user} />
      <Medium user={user} />
      <Behance user={user} />
      <Instagram user={user} />
      <Vimeo user={user} />
    </div>
  );
}

function Twitter({ user }) {
  return(
    <div className="text-field">
      <label>
        Twitter
        <input type="text" value={user.twitter || ""} />
      </label>
    </div>
  );
}

function Facebook({ user }) {
  return(
    <div className="text-field">
      <label>
        Facebook
        <input type="text" value={user.facebook || ""} />
      </label>
    </div>
  );
}

function LinkedIn({ user }) {
  return(
    <div className="text-field">
      <label>
        LinkedIn
        <input type="text" value={user.linked_in || ""} />
      </label>
    </div>
  );
}

function Dribbble({ user }) {
  return(
    <div className="text-field">
      <label>
        Dribbble
        <input type="text" value={user.dribbble || ""} />
      </label>
    </div>
  );
}

function Github({ user }) {
  return(
    <div className="text-field">
      <label>
        Github
        <input type="text" value={user.github || ""} />
      </label>
    </div>
  );
}

function CodePen({ user }) {
  return(
    <div className="text-field">
      <label>
        Codepen
        <input type="text" value={user.codepen || ""} />
      </label>
    </div>
  );
}

function Medium({ user }) {
  return(
    <div className="text-field">
      <label>
        Medium
        <input type="text" value={user.medium || ""} />
      </label>
    </div>
  );
}

function Behance({ user }) {
  return(
    <div className="text-field">
      <label>
        Behance
        <input type="text" value={user.behance || ""} />
      </label>
    </div>
  );
}

function Instagram({ user }) {
  return(
    <div className="text-field">
      <label>
        Instagram
        <input type="text" value={user.instagram || ""} />
      </label>
    </div>
  );
}

function Vimeo({ user }) {
  return(
    <div className="text-field">
      <label>
        Vimeo
        <input type="text" value={user.vimeo || ""} />
      </label>
    </div>
  );
}
export default Social
