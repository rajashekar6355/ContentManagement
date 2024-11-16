const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create a new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a contact by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(deletedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
