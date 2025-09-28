import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/store';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} вже є у списку`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Ім’я"
        required
      />
      <input
        className={styles.input}
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Телефон"
        required
      />
      <button className={styles.button} type="submit">Додати</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
