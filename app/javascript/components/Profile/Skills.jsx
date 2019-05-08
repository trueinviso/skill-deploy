import React, { PureComponent, createRef } from "react";
import Choices from "choices.js";

const config = {
  silent: true,
  removeItemButton: true,
  duplicateItemsAllowed: false,
  placeholderValue: "Enter your skills",
  maxItemCount: 15
};

class Skills extends PureComponent {
  ref = createRef();

  componentDidMount() {
    if (this.ref.current) {
      this.choices = new Choices(this.ref.current, config);
      console.log(this.choices);
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
          Add up to 15 skills to display on your profile. Use a comma to
          separate skills.
        </span>
      </div>
    );
  }
}

export default Skills;
