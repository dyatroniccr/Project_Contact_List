import React from "react";
import {Link} from "react-router-dom";

const ContactForm = () => {
  return (
    <form>
      <span>Full Name</span>
      <input type="text" placeholder="Full Name" />
      <span>Email</span>
      <input type="email" placeholder="Enter email" />
      <span>Phone</span>
      <input type="text" placeholder="Enter phone" />
      <span>Address</span>
      <input type="text" placeholder="Enter address" />
      <button type="button" className="btn btn-primary">
        save
      </button>
      <br />
      <Link to="/" ><span>or get back to contacts</span></Link>
    </form>
  );
};

export default ContactForm;
