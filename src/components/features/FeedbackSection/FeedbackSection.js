import React from 'react';
import styles from './FeedbackSection.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { feedbackState, feedbackLength } from '../../../recoil/feedbackAtom';

const FeedbackSection = () => {
  const feedbacks = useRecoilValue(feedbackState);
  const feedbacksLength = useRecoilValue(feedbackLength);

  const [activePage, setActivePage] = useState(0);
  const [isFaded, setIsFaded] = useState(false);

  const { description, picture, firstName, lastName, role } = feedbacks[activePage];

  const dots = [];

  for (let i = 0; i < feedbacksLength; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => {
            setIsFaded(true);
            setTimeout(() => setIsFaded(false), 1000);
            setTimeout(() => setActivePage(i), 500);
          }}
          className={`${i === activePage ? styles.active : ''} ${styles.dotButton} ${
            isFaded ? styles.disabled : ''
          }`}
        >
          feedback {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>

        <Swipeable
          action={setActivePage}
          page={activePage}
          pagesNumber={feedbacksLength}
        >
          <div className={`row ${isFaded ? styles.faded : ''}`}>
            <div className={styles.feedbackBox}>
              <p className={styles.decoration}>&quot;</p>
              <p className={styles.desc}>{description}</p>
              <div className='mx-auto mt-4'>
                <div className='d-inline-flex'>
                  <div>
                    <img
                      className={`rounded ${styles.image}`}
                      src={picture}
                      alt='person'
                    />
                  </div>
                  <div className={styles.personDesc}>
                    <p>{`${firstName} ${lastName}`}</p>
                    <p>{role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default FeedbackSection;
