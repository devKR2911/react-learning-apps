import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
      Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
    `;
    console.log(message);
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <div className="contact-wrapper">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="info-wrapper">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name=""
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="info-wrapper">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="info-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
