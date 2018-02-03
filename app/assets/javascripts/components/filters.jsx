class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: this.props.roles,
      types: this.props.types,
      link: this.props.link,
    };
  }

  renderFilter(filter, link) {
    return <Filter filter={filter} link={link} />;
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    const roles = this.state.roles
      .map((filter) =>
        <RoleFilter filter={filter} link={this.state.link} />
      );
    return <ul>{filters}</ul>
  }
}
