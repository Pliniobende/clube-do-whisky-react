import React from 'react';
import ContactForm from '../FormContato';
import MapaSite from '../MapaSite';
import RedesSociais from '../RedesSociais';
import { FooterWrapper } from './Footer.Styles';

const Footer = () => {
    return (
    <FooterWrapper>   
  
        <ContactForm />
       
      
        <MapaSite />
        
        <RedesSociais />
  
    </FooterWrapper> 
   
    


        
    )
}

export default Footer;
