import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module"

const Indicator = ({ size, value }) => {
  const active = Math.ceil((size / 100) * value)
  return (
    <div className={styles.iconList}>
      {Array.from({ length: size }, (_, i) => (
        <i
          key={i}
          aria-hidden="true"
          className={classNames(styles.icon, {
            [styles.iconActive]: i < Math.floor(active)
          })}
        />
      ))}
    </div>
  )
}

Indicator.propTypes = {
  size: PropTypes.number,
  value: PropTypes.number
}

Indicator.defaultProps = {
  size: 4,
  value: 0
}

export default Indicator
