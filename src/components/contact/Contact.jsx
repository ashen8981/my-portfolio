import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_d806n3c',
      'template_nn6cb6j',
      form.current,
      'yvcO6PXU_OhBLAF23'
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="ex123" data-aos="fade-down">Get In Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
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
        </form>
      </div>
    </section>
  );
};

export default Contact;