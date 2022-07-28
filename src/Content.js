import React from 'react'


const Content = ({ contact, contactDelete, newContactName, setNewContactName, handleSubmit, newContactPhone, setNewContactPhone}) => {
  
  return (
    <main className="content">
        <h2 className="contentH2">Add Contact</h2>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            id='name'
            type="text" 
            placeholder='Name'
            required
            value={newContactName}
            onChange={(e) => setNewContactName(e.target.value)}
          />
          <input
            id='phone'
            type="tel" 
            placeholder='Phone'
            required
            value={newContactPhone}
            onChange={(e) => setNewContactPhone(e.target.value)}
          />
          <button className="contactBtn">Add</button>
        </form>
        {contact.length ? ( //if statement
        <ul>
          {contact.map((contactItem) => (
            <li className="contactList" key={contactItem.id}>
              {contactItem.name} <br /> {contactItem.phone}
              <button onClick={() => contactDelete(contactItem.id)} className="deleteBtn">Delete</button>
            </li>
          ))}
        </ul>
        ) : (
          <h1 className="statement"> Empty Contact</h1>
        )}
    </main>
  )
}

export default Content