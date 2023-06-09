import React from "react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const ContactRow = ({index, contact, removeContact}) => {
    return (
        <div className="container row border border-secundary" id="contactRow">
            <div className="picture col-3">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="rounded rounded-circle mt-2 ms-5 me-3" style={{ width: "45%" }} />
            </div>
            <div className="information col d-flex justify-content-between">
                <div className="data col m-2">
                    <h5 className="fs-4 mt-2 mb-2">{contact.full_name}</h5>
                    <div className="d-flex align-items-center text-secondary mb-1">
                        <i className="fa-solid fa-location-dot me-3"></i>
                        <span>{contact.address}</span>
                    </div>
                    <div className="d-flex align-items-center text-secondary mb-1">
                        <i className="fa-solid fa-phone-flip me-3"></i>
                        <span>{contact.phone}</span>
                    </div>
                    <div className="d-flex align-items-center text-secondary mb-1">
                        <i className="fa-solid fa-envelope me-3"></i>
                        <span>{contact.email}</span>
                    </div>                    
                </div>
                <div className="icons col me-3 d-flex flex-row justify-content-end align-items-start"> 
                    <button type="button" className="ocultar border border-0 m-3 bg bg-white" ><FaPencilAlt /></button>
                    <button type="button" onClick={() => {removeContact(index)}}className="ocultar border border-0 m-3 bg bg-white" ><FaTrashAlt /></button>
                </div>
            </div>
        </div>   

    );
};

export default ContactRow;