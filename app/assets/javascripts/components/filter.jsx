class TypeFilter extends React.Component {
  render() {
    return(
      <li>
        <a href={this.props.link + "&job_type_name=" + this.props.filter.name}>
          {this.props.filter.name}
        </a>
      </li>
    );
  }
}
