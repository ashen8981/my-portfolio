import React, { useRef, useState } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState({ text: '', type: '' }); // Unified state for message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log("Email sent successfully", result.text);
      setMessage({ text: "Email sent successfully!", type: 'success' });

      // Auto hide the message after 3 seconds
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    })
    .catch((error) => {
      console.error("Error sending email:", error.text);
      setMessage({ text: "Failed to send email. Please try again.", type: 'error' });

      // Auto hide the message after 3 seconds
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    });

    e.target.reset();  // Reset form after submit
  };

  return (
    <section id="contact">
      <h5 className="ex123" data-aos="fade-down">Get In Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Contact Options */}
          <article className="contact__option" data-aos="fade-right">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ashenmalindu112@gmail.com</h5>
            <a href="mailto:ashenmalindu112@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option" data-aos="fade-up">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ashen Malindu</h5>
            <a href="https://m.me/malindu.ashen" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option" data-aos="fade-left">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+94718794279</h5>
            <a href="https://wa.me/94718794279" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail} data-aos="zoom-in">
          <input type="text" name="name" placeholder="Your Full Name*" required />
          <input type="email" name="email" placeholder="Your Email*" required />
          <textarea name="message" rows="7" placeholder="Your Message *" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {/* Success/Error Message */}
          {message.text && (
            <div 
              className={`message ${message.type}`}
              style={{ marginTop: '20px' }}
              role="alert"
              aria-live="assertive"
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
