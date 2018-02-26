import React from 'react'

class SubscriptionPlans extends React.Component {
  state = {
    activePlan: this.props.plans[0].gateway_id,
  }

  setActivePlan = (gateway_id) => {
    this.setState({
      activePlan: gateway_id
    })
  }

  render() {
    return(
      <Plans
        plans={this.props.plans}
        activePlan={this.state.activePlan}
        setActivePlan={this.setActivePlan}
        hideRadio={this.props.hideRadio}
      />
    );
  }
}

function Plans(props) {
  const planItems = props.plans.map((plan) => {
    const active = plan.gateway_id === props.activePlan
    return(
      <Plan
        key={plan.id}
        plan={plan}
        active={active}
        setActivePlan={props.setActivePlan}
        hideRadio={props.hideRadio}
      />
    );
  })

  return(
    <div>
      <Header title={props.title} />
      {planItems}
    </div>
  );
}

function Plan({ plan, active, setActivePlan, hideRadio }) {
  function RadioButton() {
    if(hideRadio === true) {
      return <div></div>
    } else {
      return(
        <input
          type="radio"
          name="plan_id"
          value={plan.gateway_id}
          checked={active ? "checked" : ""}
          readOnly
        />
      );
    }
  }
  return(
    <div
      className={`plan-wrapper ${active ? "active-plan" : ""}`}
      onClick={ () => { setActivePlan(plan.gateway_id) } }
    >
      <div className="columns small-1">
        <RadioButton />
      </div>
      <div className="columns small-11">
        <div className="radio-label plan-label">
          <label>{plan.name}</label>
        </div>
        <div className="plan-instructions">
          {plan.description}
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  if(props.title) {
    return(
      <div className="secondary-heading">
        {props.title}
      </div>
    );
  } else {
    return <div></div>
  }
}

export default SubscriptionPlans
