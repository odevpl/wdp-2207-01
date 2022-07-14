import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeading.module.scss';

const SectionHeading = ({ text, dots }) => {
  return (
    <div className={styles.root}>
      <div className='row no-gutters align-items-end justify-content-between'>
        <div className={`col-auto ${styles.heading}`}>
          <h3>{text}</h3>
        </div>
        {dots && (
          <ul className={styles.dots}>
            {[1, 2, 3].map(dot => {
              return (
                <li key={dot}>
                  <a className={dot === 1 ? styles.active : ''} href='#'></a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.string,
  dots: PropTypes.bool,
};

export default SectionHeading;
