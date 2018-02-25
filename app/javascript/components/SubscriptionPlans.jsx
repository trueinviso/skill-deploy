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
      />
    );
  })

  return(
    <div>
      <Header title="Plan Options" />
      {planItems}
    </div>
  );
}

function Plan({ plan, active, setActivePlan }) {
  return(
    <div
      className={`plan-wrapper ${active ? "active-plan" : ""}`}
      onClick={ () => { setActivePlan(plan.gateway_id) } }
    >
      <div className="columns small-1">
        <input
          type="radio"
          name="plan_id"
          value={plan.gateway_id}
          checked={active ? "checked" : ""}
          readOnly
        />
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
  return(
    <div className="secondary-heading">
      {props.title}
    </div>
  );
}

export default SubscriptionPlans
