import React from 'react';

const ContactForm = () => {

  const emailServerUrl = 'http://localhost:3000'

  return (
    <>
      <form action={emailServerUrl + "/contact"} method="POST" id="active-contact-form">
        <div className="col-sm-6">
            <div className="form-group">
                <input className="form-control" type="text" name="name" placeholder="Name" required />
            </div>
        </div>
        <div className="col-sm-6">
            <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="Email" required />
            </div>
        </div>
        <div className="col-sm-6">
            <div className="form-group">
                <input className="form-control" type="text" name="phone" placeholder="Phone" required />
            </div>
        </div>
        <div className="col-sm-12">
            <div className="form-group">
                <textarea className="form-control" name="message" data-gramm="true" data-gramm_editor="true" placeholder="Message" required="required"></textarea>
            </div>
            <button type="submit" className="tem-btn move-eff"><span>send</span></button>
        </div>
      </form>
      <p id="thank-you" className="thank-you-message"></p>
    </>
  )
};
export default ContactForm;