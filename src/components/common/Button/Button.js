import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  noHover,
  className: propClassName,
  extraInfo,
  active,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  if (active) {
    classes.push(styles.active);
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
      {extraInfo && <div className={styles.additionalData}>{extraInfo}</div>}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  extraInfo: PropTypes.string,
  active: PropTypes.bool,
};

export default Button;
