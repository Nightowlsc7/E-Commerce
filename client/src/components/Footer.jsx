import React from "react";
import style from "./../css/Footer.css";

import search from '../images/search.png'

function Footer() {
  return (
          <div className="main-footer">
           <div className="container">
           <div className="row">
 {/* Column1 */}
          <div className="col">
            <h4>Exclusive </h4>
            <h4>Subscribe</h4>
            <h1 className="list-unstyled">
              <h4>Get 10% off your first order</h4>
            </h1>
            <div className="email"> < input style={{backgroundColor:"black"}} type="text" placeholder="enter your email" /> 
            <img src={search} alt="" />
            <button>
              
              </button></div> 
           </div>
  {/* Column2 */}
          <div className="col">
            <h4>Support</h4>
            <ui className="list-unstyled">
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>+88015-88888-9999</li>
            </ui>
          </div>
 {/* Column3 */}
          <div className="col">
            <h4>Account</h4>
            <ui className="list-unstyled">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>wishlist</li>
              <li>Shop</li>

            </ui>
          </div>
  {/* Column4 */}
          <div className="col">
            <h4>Quick Link</h4>
            <ui className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>

            </ui>
          </div>
 {/* Column5 */}
           <div className="col">
            <h4>Download App</h4>
            <ui className="list-unstyled">
            <li>Save S3 with App new Only</li>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-qr-code" viewBox="0 0 16 16">
  <path d="M2 2h2v2H2z"/>
  <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
  <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
  <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
  <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
               </svg>
               </ui>
              </div>
              </div>
               <hr />
            <div className="row">
             <p className="col-sm"> Copyright Rimel 2022. All right reserved </p>
                </div></div></div>
  );
}

export default Footer;
