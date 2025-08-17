import React from "react";
import "./Contact.css"; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Information</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:support@app.com">support@app.com</a>
          </p>
          <p>Phone: +91-9876543210</p>
          <p>Address: Bangalore, India</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" required />
          <input type="email" placeholder="Email" className="contact-input" required />
          <textarea placeholder="Message" className="contact-textarea" required />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
