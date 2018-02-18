import React from 'react'
import FileUpload from './FileUpload'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.user.email
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="small-12 columns">
          <PersonalInfo email={this.state.email} />
        </div>
      </form>
    );
  }
}

function PersonalInfo({ email }) {
  return(
    <div className="text-field row">
      <label>
        Email
        <input type="text" value={email} />
      </label>
    </div>
  );
}

export default Form
