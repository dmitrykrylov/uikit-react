import cx from 'classnames'
import { PropTypes } from 'react'

const Input = ({
  blank,
  className: customClassName,
  danger,
  icon,
  large,
  small,
  success,
  width,
  ...other,
}) => {
  const className = cx(customClassName, {
    'uk-form-blank': blank,
    'uk-form-danger': danger,
    'uk-form-large': large,
    'uk-form-small': small,
    'uk-form-success': success,
    'uk-form-width-large': width === 'large',
    'uk-form-width-medium': width === 'medium',
    'uk-form-width-mini': width === 'mini',
    'uk-form-width-small': width === 'small',
    'uk-width-1-1': width === 'full',
  })
  const input = <input {...other} className={className} />
  if (icon) {
    return (
      <div className="uk-form-icon">
        <i className={`uk-icon-${icon}`} />
        {input}
      </div>
    )
  }
  return input
}

Input.propTypes = {
  blank: PropTypes.bool,
  className: PropTypes.string,
  danger: PropTypes.bool,
  icon: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  width: PropTypes.oneOf(['full', 'large', 'medium', 'small', 'mini']),
}

export default Input