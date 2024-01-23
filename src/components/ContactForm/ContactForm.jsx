import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts/contactsOperation';
import { TextField, Button } from '@mui/material';
import { warningMessageContacts } from '../../utils/utils';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      warningMessageContacts(name);
      reset();
      return;
    }

    const user = { name, number };

    dispatch(addContacts(user));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        style={{ marginBottom: 20 }}
        onChange={handleNameChange}
        type="text"
        label="Name"
        value={name}
        name="name"
        fullWidth
        id="outlined-basic"
        required
      />

      <TextField
        onChange={handleNameChange}
        style={{ marginBottom: 20 }}
        type="tel"
        fullWidth
        value={number}
        name="number"
        label="Number"
        required
      />
      <Button
        style={{ textTransform: 'none', margin: 'auto', display: 'block' }}
        variant="contained"
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
