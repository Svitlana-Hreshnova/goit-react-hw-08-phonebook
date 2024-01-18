import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      style={{ marginBottom: 15 }}
      onChange={handleFilterChange}
      type="text"
      name="filter"
      value={filter}
      fullWidth
      label="Find contacts by name"
      id="outlined-basic"
    ></TextField>
  );
};

export default Filter;
