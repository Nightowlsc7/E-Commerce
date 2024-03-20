import React from 'react';
import style from '../css/Contact.css';

function Contact() {
  return (
    <div>
      <section id='dda' className="mb-4">
        <div className="row">
        <div  className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
            <br /><br /><br /><br /><br />
              <li> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
                  </svg>
                <h2>Call To Us  </h2>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </li>
              <h3>--------------------------</h3>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-check" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
                  </svg>
                <h2>Write To Us</h2>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </li>
            </ul>
          </div>
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <br /><br /><br />
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" placeholder='Your name' className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" placeholder='Your email' className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" placeholder='Subject' className="form-control" />
                  </div>
                </div>
              </div>

              <br /><br /><br />
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" placeholder='Your message' name="message" rows="2" className="form-control md-textarea"></textarea>
                  </div>
                </div>
              </div>

              <div className="text-center text-md-right">
                <button>Send Massage</button>
              </div>
            </form>
          </div>

         
        </div>
      </section>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default Contact;
