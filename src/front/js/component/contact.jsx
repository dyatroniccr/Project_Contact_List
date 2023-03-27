import React, { useState } from "react";
import { Link } from "react-router-dom";

//Import components
import ContactForm from "./contactForm.jsx"
import ContactRow from "../pages/contactRow.jsx";


const Contact = () => {
    const [contacts, setContacts] = useState([
        {id:1,full_name:"Mike Anamendolla",email:"mike.ana@example.com",phone:"(870) 288-4149",address:"5842 Hillcrest Rd"},
        {id:2,full_name:"Francisco Mendez",email:"francisco.mendez@example.com",phone:"(870) 277-4149",address:"5842 Hillcrest Rd"},
    ]);

    const addNewContact = () => {
        setContacts([...contacts, {id:contacts.length+1,full_name:"",email:"",phone:"",address:""}]);
    };
    
    const editContact = () => {
        setContacts([{id:contacts.length+1,full_name:"",email:"",phone:"",address:""}])
    };

    const removeContact = (id) => {
        setContacts(
          contacts.filter((item, index) => {
            return index != id
          }));
    };   

    return (
        <>
            <div className="principal container-md bg bg-white pt-4 pb-5">
                <div className="d-flex justify-content-end mt-3 mb-3 me-4">
                    <Link to="/contactForm"><button type="button" className="button-new-contact fs-5 fw-bold btn">Add New Contact</button></Link>
                </div>

                {contacts && contacts.length >0 ? 
                    <div className="container">
                        {contacts.map((cont,index) => (
                            <ContactRow key={cont.id} index={index} contact={cont} removeContact={removeContact} />
                        ))}                            
                    </div>
                    :
                    <div className="border ps-5 pb-3 pt-3 d-flex justify-content-center rounded"> 
                        <h1>No hay Lista de Contactos</h1>
                    </div>
                }           
            </div>
        </>
    );
};

export default Contact;