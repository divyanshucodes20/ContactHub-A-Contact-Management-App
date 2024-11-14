import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

export const EditContactDialog = ({ open, contact, onClose, onChange, onSubmit }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Edit Contact</DialogTitle>
    <DialogContent>
      {contact && (
        <>
          <TextField
            label="First Name"
            value={contact.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={contact.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={contact.email}
            onChange={(e) => onChange('email', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            value={contact.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            value={contact.company}
            onChange={(e) => onChange('company', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Job Title"
            value={contact.jobTitle}
            onChange={(e) => onChange('jobTitle', e.target.value)}
            fullWidth
            margin="normal"
          />
        </>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">Cancel</Button>
      <Button onClick={onSubmit} color="primary">Save</Button>
    </DialogActions>
  </Dialog>
);

