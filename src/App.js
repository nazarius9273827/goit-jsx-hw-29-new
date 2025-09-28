import React from 'react';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';

const App = () => {
  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;