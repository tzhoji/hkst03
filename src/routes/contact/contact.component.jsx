import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
// import { withRouter } from 'react-router-dom';
import './contact.styles.scss';

const SERVICE_ID = "service_mpw2138";
const TEMPLATE_ID = "template_ktb0vlk";
const PUBLICKEY="fZTppzmX6WxHAlsLv";





const ContactForm = ({ history }) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLICKEY)
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLICKEY')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        });
        history.push('/'); // Use history.push to navigate to a different route after successful form submission
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <div className="emailcontent">
        <h1>Contact us</h1>
      <form onSubmit={handleOnSubmit} className="contact-form">
        <input
          type="email"
          id="form-input-control-email"
          name="user_email"
          placeholder="Email..."
          required
          className="input-field"
        />
        <input
          type="text"
          id="form-input-control-last-name"
          name="user_name"
          placeholder="Name..."
          required
          className="input-field"
        />
        <textarea
          id="form-textarea-control-opinion"
          name="user_message"
          placeholder="Message..."
          required
          className="textarea-field"
        ></textarea>
        <div className='submitgrid'>
            <button type="submit" className="submit-button">
            Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

