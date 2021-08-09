import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module"

const Indicator = ({ size, value }) => {
  console.log(value)
  const defaults = {
    0: 1,
    50: 2,
    100: 3,
    150: 4,
  }

  return (
    <div className={styles.iconList}>
      {Array.from({ length: size }, (_, i) => (
        <i
          key={i}
          aria-hidden="true"
          className={classNames(styles.icon, {
            [styles.iconActive]: i < defaults[value]
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
