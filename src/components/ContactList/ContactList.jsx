import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export function Contacts() {
  const filter = useSelector(selectFilter);
  const onDeleteContact = id => dispatch(deleteContact(id));
  // console.log(contacts)
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={css.deleteBtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
