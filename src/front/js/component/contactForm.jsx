import React from "react";
import { Link } from "react-router-dom";

//Styles
import "../../styles/contactForm.css";

const ContactForm = () => {
  return (
    <div className="container-fluid bg bg-dark">
      <div className="contactForm container bg bg-white">
        <div className="d-flex justify-content-center">
          <h1 className="fs-1 fw-bold mt-5">Add a new contact</h1>
        </div>
        <div className="form-control border border-0 ps-4 pe-4">
          <form>
            <label htmlFor="full-name" className="form-label fs-5">
              Full Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Full Name"
            />
            <label htmlFor="email" className="form-label fs-5">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter email"
            />
            <label htmlFor="phone" className="form-label fs-5">
              Phone
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter phone"
            />
            <label htmlFor="address" className="form-label fs-5">
              Address
            </label>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Enter address"
            />
            <button
              type="button"
              className="button col-md-8 btn btn-primary fs-6 fw-bold"
            >
              save
            </button>
            <br />
            <Link to="/">
              <span className="fs-5">or get back to contacts</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
