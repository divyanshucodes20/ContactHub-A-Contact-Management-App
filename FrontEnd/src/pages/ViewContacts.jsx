import React, { useState, useEffect } from 'react';
import { Paper, CircularProgress, Snackbar } from '@mui/material';
import axios from 'axios';
import { ContactTable } from '../components/ContactTable';
import { EditContactDialog } from '../components/EditDialog';
import { Pagination } from '../components/Pagination';

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/contacts')
      .then(response => {
        if (response.data.success && Array.isArray(response.data.data)) {
          setContacts(response.data.data);
        } else {
          setError('Fetched data is not in the expected format');
        }
      })
      .catch(() => setError('Error fetching contacts!'))
      .finally(() => setLoading(false));
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleEditClick = (contact) => {
    setCurrentContact(contact);
    setOpenEditDialog(true);
  };

  const handleEditSubmit = () => {
    axios.put(`http://localhost:3000/api/v1/contacts/${currentContact._id}`, currentContact)
      .then(() => {
        setContacts(contacts.map(contact => contact._id === currentContact._id ? currentContact : contact));
        setOpenEditDialog(false);
      })
      .catch(() => setError('Failed to update contact'));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/v1/contacts/${id}`)
      .then(() => setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id)))
      .catch(() => setError('Error deleting contact'));
  };

  const handleEditChange = (field, value) => {
    setCurrentContact(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '20px' }} />
      ) : error ? (
        <Snackbar open={true} message={error} autoHideDuration={6000} onClose={() => setError(null)} />
      ) : (
        <>
          <ContactTable
            contacts={contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            onEditClick={handleEditClick}
            onDelete={handleDelete}
          />
          <Pagination
            count={contacts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
          />
          <EditContactDialog
            open={openEditDialog}
            contact={currentContact}
            onClose={() => setOpenEditDialog(false)}
            onChange={handleEditChange}
            onSubmit={handleEditSubmit}
          />
        </>
      )}
    </Paper>
  );
};

export default ViewContacts;
