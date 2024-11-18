// "use client"
// import React from "react";
// import EmailLocationSection from "./EmailLocationSection";

// const ContactForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <div className="row mt-1 justify-content-center" data-aos="fade-up">
//           <div className="col-lg-10">
//             <form onSubmit={handleSubmit} className="php-email-form">
//               <div className="row">
//                 <div className="col-md-6 form-group">
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     id="name"
//                     placeholder="Name"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6 form-group mt-3 mt-md-0">
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     id="email"
//                     placeholder="Email"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-group mt-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="subject"
//                   id="subject"
//                   placeholder="Subject"
//                   required
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <textarea
//                   className="form-control"
//                   name="message"
//                   rows="5"
//                   placeholder="Message"
//                   required
//                 ></textarea>
//               </div>
//               <div className="my-3">
//                 <div className="loading">Loading</div>
//                 <div className="error-message"></div>
//                 <div className="sent-message">Your message has been sent. Thank you!</div>
//               </div>
//               <div className="text-center">
//                 <button type="submit" style={{ backgroundColor: "steelblue" }}>
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;



"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 mb-4"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 mb-4"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full border p-2 mb-4"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full border p-2 mb-4"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded"
      >
        Send Message
      </button>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
}

