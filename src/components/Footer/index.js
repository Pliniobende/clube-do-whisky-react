import React from 'react';
import SignupForm from '../FormContato';
import MapaSite from '../MapaSite';
import RedesSociais from '../RedesSociais';

const Footer = () => {
    return (
        
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5"></div>
        <SignupForm />
        </div>
        <div className="row">
        <div className="col-md-5"></div>
        </div>
        <MapaSite />
        <div className="row">
        <div className="col-md-5"></div>
        <RedesSociais />
        </div>
   
    </div>


        
    )
}

export default Footer;
