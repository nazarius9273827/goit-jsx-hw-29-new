import { createStore, combineReducers } from 'redux';

const ADD_CONTACT = 'contacts/add';
const DELETE_CONTACT = 'contacts/delete';

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const SET_FILTER = 'filter/set';

export const setFilter = (value) => ({
  type: SET_FILTER,
  payload: value,
});

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.contacts);
    localStorage.setItem('contacts', serializedState);
  } catch {
    // ігноруємо помилки
  }
};

const preloadedState = {
  contacts: loadState() || [],
  filter: '',
};

export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
  saveState(store.getState());
});
