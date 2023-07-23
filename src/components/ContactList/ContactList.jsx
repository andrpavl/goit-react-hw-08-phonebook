import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { selectContacts, selectFilter } from 'redux/Contacts/selectors';
import css from './ContactList.module.css';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

export function ContactsList() {
  const filter = useSelector(selectFilter);
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.warn('Contact deleted!');
  };
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            variant="contained"
            size="small"
            onClick={() => onDeleteContact(contact.id)}
            style={{ marginLeft: '20px' }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
