class TagList extends React.Component {
  render() {
    const link = this.props.link
    const tags = this.props.tags
      .map((tag) =>
        <li><a href={link + "&tag_name=" + tag.name}>{tag.name}</a></li>
      );
    return <ul>{tags}</ul>
  }
}
