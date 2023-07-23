import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/Contacts/selectors';
import { addContact, fetchContacts } from 'redux/Contacts/operations';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

export function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (name, number) => {
    const isInContacts = contacts.some(contact => contact.name === name);
    if (isInContacts) {
      return toast.warn(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(addContact(newContact));
      toast.success(`${name} added to your contacts`);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const telId = nanoid();

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        {isLoading && !error && (
          <div className={css.loader}>
            <Loader />
          </div>
        )}
        <label htmlFor={nameId} className={css.label}>
          Name
          <input
            className="form-control"
            placeholder='Enter name'
            aria-label="default input example"
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={telId} className={css.label}>
          Phone
          <input
            onChange={handleChange}
            value={number}
            name="number"
            className="form-control"
            required
            type="tel"
            placeholder="Enter phone number"
            aria-label="default input example"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          ></input>
        </label>

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
}
