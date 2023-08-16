import React, { useState } from 'react';
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (

    <section className='ch-elini contain contain-bg'>
      <h2 className='sec-head sec-head-ul'>
        Contact Us
      </h2>
      <p className='sec-para'>
        If you have any queries related to our products or your order,
        you may reach out to us on our WhatsApp number:<span> +91 99003 54682 </span>(Monday to Saturday – 9:30 am to 6:00 pm IST),
        or email us at: <span>care@eliniclothing.com </span>
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact;
