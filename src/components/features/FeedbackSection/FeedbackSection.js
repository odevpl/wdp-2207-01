import React from 'react';
import styles from './FeedbackSection.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/feedbackRedux';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useState } from 'react';

const FeedbackSection = () => {
  const allFeedbacks = useSelector(state => getAll(state));

  const [activePage, setActivePage] = useState(0);
  const [isFaded, setIsFaded] = useState(false);

  const dots = [];

  for (let i = 0; i < allFeedbacks.length; i++) {
    dots.push(
      <li key={allFeedbacks[i].id}>
        <a
          onClick={() => {
            setIsFaded(true);
            setTimeout(() => setIsFaded(false), 1000);
            setActivePage(i);
          }}
          className={i === activePage ? styles.active : ''}
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
          pagesNumber={allFeedbacks.length}
        >
          <div className={`row ${isFaded ? styles.faded : ''}`}>
            <div key={allFeedbacks[activePage].id} className={styles.feedbackBox}>
              <p className={styles.decoration}>&quot;</p>
              <p className={styles.desc}>{allFeedbacks[activePage].description}</p>
              <div className='mx-auto mt-4'>
                <div className='d-inline-flex'>
                  <div>
                    <img
                      className={`rounded ${styles.image}`}
                      src={allFeedbacks[activePage].picture}
                      alt='person'
                    />
                  </div>
                  <div className={styles.personDesc}>
                    <p>{`${allFeedbacks[activePage].firstName} ${allFeedbacks[activePage].lastName}`}</p>
                    <p>{allFeedbacks[activePage].role}</p>
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
