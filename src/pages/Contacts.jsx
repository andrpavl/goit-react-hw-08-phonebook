import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook/Phonebook';

export default function Contacts() {
  return (
    <>
      <Phonebook />
      <h2 style={{textAlign: 'center', marginTop: '40px'}}>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}
