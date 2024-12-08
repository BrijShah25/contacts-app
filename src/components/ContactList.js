import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Loader from './Loader';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="contact-list">
      {isLoading ? (
        <Loader />
      ) : (
        contacts.map((contact) => <Contact key={contact.id} contact={contact} />)
      )}
    </div>
  );
};

export default ContactList;
