import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactTables";
import * as contactService from "./services/ContactServices";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  // Fetch contacts from API
  const fetchContacts = async () => {
    try {
      const response = await contactService.getContacts();
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Load contacts on initial render
  useEffect(() => {
    fetchContacts();
  }, []);

  // Handle creating or updating contact
  const handleSaveContact = async (contact) => {
    try {
      if (editingContact) {
        await contactService.updateContact(editingContact._id, contact);
        toast.info("Contact updated successfully!", {});
      } else {
        await contactService.createContact(contact);
        toast.success("Contact added successfully!");
      }
      fetchContacts();
      setEditingContact(null); // Reset editing state
    } catch (error) {
      toast.error("Error saving contact. Please try again.");
      console.error("Error saving contact:", error);
    }
  };

  // Handle deleting contact
  const handleDeleteContact = async (id) => {
    try {
      await contactService.deleteContact(id);
      toast.error("Contact deleted successfully!", {});
      fetchContacts();
    } catch (error) {
      toast.error("Error deleting contact. Please try again.");
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Contact Management System
      </Typography>

      <ContactForm
        contact={editingContact}
        onSave={handleSaveContact}
        onCancel={() => setEditingContact(null)}
      />
      <ContactsTable
        contacts={contacts}
        onEdit={(contact) => setEditingContact(contact)}
        onDelete={handleDeleteContact}
      />

      {/* ToastContainer to show the notifications */}
      <ToastContainer />
    </Container>
  );
}

export default App;
