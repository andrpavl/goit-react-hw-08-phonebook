import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { selectContacts, selectFilter } from 'redux/Contacts/selectors';
import css from './ContactList.module.css';

export function ContactsList() {
  const filter = useSelector(selectFilter);
  const onDeleteContact = id => dispatch(deleteContact(id));
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
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={css.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
