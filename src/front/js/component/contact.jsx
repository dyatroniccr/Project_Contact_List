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

    return (
        <>
            <div className="container w-75">
                <div className="d-flex justify-content-end mt-3 mb-3">
                    <Link to="/contactForm"><button type="button" className="btn btn-success">Add New Contact</button></Link>
                </div>
                
            </div>

            {contacts && contacts.length >0 ? 
                <div className="container">
                    {contacts.map((cont,index) => (
                        <ContactRow key={cont.id} index={index} contact={cont} />
                    ))}                            
                </div>
                :
                <div className="border ms-2 me-3 ps-5 pb-3 pt-3 d-flex justify-content-between"> 
                    <h1>No hay Lista de Contactos</h1>
                </div>
            } 
           
           
        </>
    );
};

export default Contact;