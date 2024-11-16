import { Contact } from "../models/contact.model.js";

// Get all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({
            success: true,
            message: 'Contacts fetched successfully',
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts',
            error: error.message
        });
    }
};

// Add a new contact
export const addContact = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;

        if (!firstName || !lastName || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'First Name, Last Name, Email, and Phone are required fields.'
            });
        }

        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({
                success: false,
                message: 'Contact with this email already exists.'
            });
        }

        const contact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            company,
            jobTitle
        });

        await contact.save();
        res.status(201).json({
            success: true,
            message: 'Contact created successfully',
            contact
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to create contact',
            error: error.message
        });
    }
};

// Update a contact
export const updateContact = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;
        //console.log(req.body)
        const updatedFields = {};
        if (firstName) updatedFields.firstName = firstName;
        if (lastName) updatedFields.lastName = lastName;
        if (email) updatedFields.email = email;
        if (phone) updatedFields.phone = phone;
        if (company) updatedFields.company = company;
        if (jobTitle) updatedFields.jobTitle = jobTitle;

        if (Object.keys(updatedFields).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'At least one field must be provided for updating.'
            });
        }

        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            updatedFields,
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact updated successfully',
            updatedContact
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update contact',
            error: error.message
        });
    }
};

// Delete a contact
export const deleteContact = async (req, res) => {
    try {
        const contactToBeDeleted = await Contact.findByIdAndDelete(req.params.id);
        if (!contactToBeDeleted) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found.'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Contact deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting contact',
            error: error.message
        });
    }
};
