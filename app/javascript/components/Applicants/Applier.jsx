import PropTypes from "prop-types"
import styles from "./styles.module"

const Applier = ({ attributes, profilePath }) => {
  return (
    <a href={profilePath} className={styles.applier}>
      <img
        className={styles.avatar}
        src={attributes.avatar_url}
        alt={attributes.first_name}
      />
      <span className={styles.name}>
        {attributes.first_name}
        &nbsp;
        {attributes.last_name}
      </span>
    </a>
  )
}

Applier.propTypes = {
  id: PropTypes.string,
  profilePath: PropTypes.string,
  attributes: PropTypes.shape({
    avatar_url: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
  })
}
export default Applier
