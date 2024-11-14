import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination, Paper, Button, CircularProgress, Snackbar, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

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
      .catch(error => {
        setError('There was an error fetching contacts!');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (contact) => {
    setCurrentContact(contact);
    setOpenEditDialog(true); 
  };

  const handleEditSubmit = () => {
    if (currentContact) {
      axios.put(`http://localhost:3000/api/v1/contacts/${currentContact._id}`, currentContact)
        .then(response => {
          setContacts(contacts.map(contact => contact._id === currentContact._id ? currentContact : contact)); 
          setOpenEditDialog(false);
        })
        .catch(error => {
          console.error('Error updating contact:', error);
          setError('Failed to update contact');
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/v1/contacts/${id}`)
      .then(() => {
        setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id));
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
        setError('There was an error deleting the contact!');
      });
  };

  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '20px' }} />
      ) : error ? (
        <Snackbar
          open={true}
          message={error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
        />
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'firstName'}
                    direction={orderBy === 'firstName' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'firstName')}
                  >
                    First Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'lastName'}
                    direction={orderBy === 'lastName' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'lastName')}
                  >
                    Last Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'email'}
                    direction={orderBy === 'email' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'email')}
                  >
                    Email
                  </TableSortLabel>
                </TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
                <TableRow hover tabIndex={-1} key={contact._id}>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>{contact.jobTitle}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleEditClick(contact)}>Edit</Button>
                    <Button variant="contained" color="error" onClick={() => handleDelete(contact._id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          {currentContact && (
            <>
              <TextField
                label="First Name"
                value={currentContact.firstName}
                onChange={(e) => setCurrentContact({ ...currentContact, firstName: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name"
                value={currentContact.lastName}
                onChange={(e) => setCurrentContact({ ...currentContact, lastName: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={currentContact.email}
                onChange={(e) => setCurrentContact({ ...currentContact, email: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                value={currentContact.phone}
                onChange={(e) => setCurrentContact({ ...currentContact, phone: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Company"
                value={currentContact.company}
                onChange={(e) => setCurrentContact({ ...currentContact, company: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Job Title"
                value={currentContact.jobTitle}
                onChange={(e) => setCurrentContact({ ...currentContact, jobTitle: e.target.value })}
                fullWidth
                margin="normal"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="primary">Cancel</Button>
          <Button onClick={handleEditSubmit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ViewContacts;
