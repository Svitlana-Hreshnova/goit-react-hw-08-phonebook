import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
} from '../../redux/contacts/contactsOperation';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { List, ListItem, Typography, Button, Box } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedName = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  if (error === 'rejected') {
    return <div>Not found contacts</div>;
  }

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (contacts.length === 0) {
    return <div>Add your contacts</div>;
  }

  if (!isLoading) {
    return (
      <List style={{ width: '100%', backgroundColor: '#fff' }}>
        {visibleContacts.map(contact => (
          <ListItem
            style={{ display: 'flex', alignItems: 'center' }}
            key={contact.id}
          >
            <Typography
              style={{ marginRight: 25 }}
              typography="h6"
              color="#1954d2"
              component="span"
            >
              {contact.name}
            </Typography>

            <Box style={{ marginLeft: 'auto' }}>
              <Typography
                style={{ marginRight: 25 }}
                typography="h6"
                color="#1954d2"
                component="span"
              >
                {contact.number}
              </Typography>

              <Button
                variant="contained"
                style={{ backgroundColor: 'darkBlue' }}
                onClick={() => dispatch(deleteContacts(contact.id))}
              >
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    );
  }
};

export default ContactList;
