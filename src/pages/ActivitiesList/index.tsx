import React from 'react';
import ActivityFilter from '../../components/ActivityFilter';
import ActivitySearchFilter from '../../components/ActivitySearchFilter';
import styles from './index.module.scss';

export default function ActivitiesList() {
  return <div className={styles.filterBar} >
    <ActivityFilter />
    <ActivitySearchFilter />
  </div>;
}
