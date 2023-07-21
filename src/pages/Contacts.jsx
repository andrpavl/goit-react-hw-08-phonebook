import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook/Phonebook';

export default function Contacts() {
  return (
    <>
      <h2>Phonebook</h2>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}
