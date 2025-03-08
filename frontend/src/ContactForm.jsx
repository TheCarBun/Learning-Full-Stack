import { useState } from "react";
import "./css/ContactForm.css";

const ContactForm = ({}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
    };
    const url = "http://127.0.0.1:5000/create_contact";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      //
    }
  };

  return (
    <div className="contact-form ">
      <h3>Add a Contact</h3>
      <form onSubmit={onSubmit}>
        <div className="first-name form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="last-name form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="email form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
