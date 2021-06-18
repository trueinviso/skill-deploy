import PropTypes from "prop-types"
import React, { PureComponent, Fragment, createRef } from "react"
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
      const inputElements = document.getElementsByClassName('choices__input')
      for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].maxLength = "50"
      }
    }
  }

  componentWillUnmount() {
    if (this.choices) {
      this.choices.destroy()
    }
  }

  render() {
    return (
      <Fragment>
        <label className="form--label -black" htmlFor="user_skills">
          List skills on your profile
        </label>
        <input
          hidden
          id="user_skills"
          type="text"
          ref={this.ref}
          name="user[skills]"
          maxLength="10"
        />
        <span className="choices__helper-text">
          Add up to 15 skills to display on your profile. Hit enter after each
          skill you input.
        </span>
      </Fragment>
    )
  }
}

export default Skills
