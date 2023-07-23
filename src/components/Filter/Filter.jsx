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
    <div className={css.cont}>
      <label htmlFor="name" className={css.label}>
        Find contacts by name
        <input
          placeholder="Enter name"
          value={value}
          onChange={handleFilterChange}
          style={{ marginLeft: '20px', width: '200px' }}
          className="form-control"
          aria-label="default input example"
          type="text"
        />
      </label>
    </div>
  );
}
