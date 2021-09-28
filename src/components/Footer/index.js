import React from 'react';
import SignupForm from '../FormContato';
import MapaSite from '../MapaSite';
import RedesSociais from '../RedesSociais';
import { FooterWrapper } from './Footer.Styles';

const Footer = () => {
    return (
    <FooterWrapper>   
  
        <SignupForm />
       
      
        <MapaSite />
        
        <RedesSociais />
  
    </FooterWrapper> 
   
    


        
    )
}

export default Footer;
