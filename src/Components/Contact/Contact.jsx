import { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const ref = useRef();
    const form = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk100bc', 'template_8wqa6lz', form.current, 'FBNOm_0fBXllootXR')
      .then((result) => {
          setSuccess(true);
      }, (error) => {
          setError(true);
      });
    
    const formToReset = document.getElementById('contact_form');
    formToReset.reset();
  };

  return (
    <div
      className="contact"
    >
      <div  className="textContainer">
        <h1 >Wanna work together?</h1>
        <div className="item" >
          <h2>Mail</h2>
          <span>pg99285@gmail.com</span>
        </div>
        <div className="item" >
          <h2>GitHub</h2>
          <span>Dellucifer</span>
        </div>
        <div className="item" >
          <h2>Twitter</h2>
          <span>@Dellucifer</span>
        </div>
      </div>

      <div className="formContainer">
        <div
          className="phoneSvg"
        >
        </div>
        <form
          id="contact_form"
          ref={form} 
          onSubmit={sendEmail}
        >
          <input type="text" placeholder="Name" required name="name" />
          <input type="email" placeholder="Email" required name="email" />
          <textarea rows={8} name="message" />
          <button type="submit">Submit</button>
          {error && <p style={{textAlign: "center"}}>{error && "Error"}</p>}
          {success && <p style={{textAlign: "center"}}>{success && "Success"}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
