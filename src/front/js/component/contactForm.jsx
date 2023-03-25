import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="container-fluid bg bg-dark">
      <div className="container bg bg-white">
        <div className="d-flex justify-content-center">
          <h1>Add a new contact</h1>
        </div>
        <div>
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
            <button type="button" className="col-md-8 btn btn-primary">
              save
            </button>
            <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            <Link to="/">
              <span>or get back to contacts</span>
            </Link>
          </form>
        </div>

        <form className="row g-3">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
          <div className="col-12"></div>
          <div className="col-md-6"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
