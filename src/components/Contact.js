import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div className="contact-card">
      <h2>{contact.name}</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p>
        <strong>Website:</strong>{' '}
        <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">
          {contact.website}
        </a>
      </p>
      <p><strong>Company:</strong> {contact.company.name}</p>
    </div>
  );
};

export default Contact;
