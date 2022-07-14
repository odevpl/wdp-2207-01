import React from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import styles from './FeedbackSection.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/feedbackRedux';

const FeedbackSection = () => {
  // const exampleFeedback = useSelector(state => getAll(state)).slice(0, 1);

  return (
    <div className={styles.root}>
      <div className='container'>
        <SectionHeading text={'Client feedback'} dots />
        {/* {exampleFeedback.map(({ id, picture, firstName, lastName, role }) => {
          return (
            <div key={id} className={styles.feedbackBox}>
              <p className={styles.decoration}>&quot;</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, veniam,
                illum eos mollitia sint nisi aliquam neque repudiandae at eligendi odio.
                Aliquam voluptates ipsa accusamus mollitia ipsum dolor voluptate
                dolores.
              </p>
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
          );
        })} */}
      </div>
    </div>
  );
};

export default FeedbackSection;
