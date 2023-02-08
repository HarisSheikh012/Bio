import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="section">
        <h2 className="myheading">Feel Free to Contact Us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6813.731735101044!2d71.49169951280399!3d30.172419936709307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b36c1b2dbd637%3A0x7f3c9ad98305216!2sKhawaja%20Farid%20Social%20Security%20Hospital!5e0!3m2!1sen!2s!4v1667975464186!5m2!1sen!2s" 
        width="100%" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
        <div className="mycontainer">
          <div className="contact-form">
            <form action="#" method="POST" className="myform">
              <input type="text" name="username" placeholder="Username" autoComplete="off" required className="inputstyleclass"/>
              <input type="email" name="email" placeholder="Email" autoComplete="off" required className="inputstyleclass"/>
              <textarea name="message" cols="30" rows="6" autoComplete="off" placeholder="enter your message" required className="inputstyleclass"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
