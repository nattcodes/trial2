import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";



function App() {
  const [contact, setContact] = useState(JSON.parse(localStorage.getItem('contactManager')) || [])
  const [newContactName, setNewContactName] = useState('');  //contact Name
  const [newContactPhone, setNewContactPhone] = useState('');  //contact Phone
  const [searchBox, setSearchBox] = useState('')

  useEffect(() => {
    localStorage.setItem('contactManager', JSON.stringify(contact));
  }, [contact])

  const addContact = (contactItem) => {
    const id = contact.length ? contact[contact.length - 1].id + 1 : 1;
    const myNewItem = {id, name:contactItem, phone:newContactPhone}
    const listContact = [...contact, myNewItem]
    setContact(listContact);
    
  }
  const handleSubmit = (e) => {// Add contact button
    e.preventDefault()
    if (!newContactName, !newContactPhone) return;
    addContact(newContactName , newContactPhone)
    setNewContactName('') //contact Name
    setNewContactPhone('') //contact phone
  }

  const contactDelete = (id) => { //assigned an object of (id) ---------Delete button*-----//
    const listContact = contact.filter((contactItem) => contactItem.id !== id)
    setContact(listContact);
  }
  
  
  
  return (
    <div className="App">
      <Header
        searchBox={searchBox}
        setSearchBox={setSearchBox}
      />
      <Content
      contact={contact.filter((contactItem) => ((contactItem.name).toLowerCase()).includes(searchBox.toLowerCase()))}
      setContact={setContact}
      newContactName={newContactName}
      setNewContactName={setNewContactName}
      newContactPhone={newContactPhone}
      setNewContactPhone={setNewContactPhone}
      addContact={addContact}
      handleSubmit={handleSubmit}
      contactDelete={contactDelete}// Delete button*-----//
      />
    </div>
  )
}

export default App;
