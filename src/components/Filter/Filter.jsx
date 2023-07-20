import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/Contacts/selectors';
import { setFilter } from 'redux/Contacts/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label htmlFor="name">
      Find contacts by name
      <input
        className={css.filterInput}
        placeholder="Enter name"
        name="name"
        type="text"
        value={value}
        onChange={handleFilterChange}
      />
    </label>
  );
}
