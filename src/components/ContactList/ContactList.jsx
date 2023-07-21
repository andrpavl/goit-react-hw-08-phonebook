import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { selectContacts, selectFilter } from 'redux/Contacts/selectors';
// import css from './Contacts.module.css';

export function ContactsList() {
  const filter = useSelector(selectFilter);
  const onDeleteContact = id => dispatch(deleteContact(id));
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
