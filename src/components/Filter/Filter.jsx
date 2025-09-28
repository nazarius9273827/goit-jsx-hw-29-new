import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/store';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Пошук контакту"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
