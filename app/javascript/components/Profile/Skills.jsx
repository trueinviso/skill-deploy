import PropTypes from "prop-types"
import React, { PureComponent, createRef } from "react"
import Choices from "choices.js"

const config = {
  silent: true,
  removeItemButton: true,
  duplicateItemsAllowed: false,
  placeholderValue: "Enter your skills",
  maxItemCount: 15
}

class Skills extends PureComponent {
  static defaultProps = {
    initialSkills: []
  }
  static propTypes = {
    initialSkills: PropTypes.arrayOf(PropTypes.string)
  }
  ref = createRef()

  componentDidMount() {
    if (this.ref.current) {
      this.choices = new Choices(this.ref.current, {
        ...config,
        items: this.props.initialSkills
      })
    }
  }

  componentWillUnmount() {
    if (this.choices) {
      this.choices.destroy()
    }
  }

  render() {
    return (
      <div>
        <label className="label" htmlFor="user_skills">
          Your skills *
        </label>
        <input
          id="user_skills"
          type="text"
          ref={this.ref}
          name="user[skills]"
        />
        <span className="choices-helper-text">
          Add up to 15 skills to display on your profile. Hit enter after each
          skill you input.
        </span>
      </div>
    )
  }
}

export default Skills
