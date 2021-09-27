import React from 'react';
import { PhoneIcon, FacebookIcon , EmailIcon, TwitterIcon, InstagramIcon } from './ResedSociais.styles';

const RedesSociais = () => {
    return (
        <>
            <PhoneIcon />
            <label>(57) 3000-5000</label>
            <EmailIcon />
            <label>email@address.com</label>
            <FacebookIcon />
            <label>clubedowhisky/facebook.com</label>
            <TwitterIcon />
            <label>clubedowhisky/twiter.com</label>
            <InstagramIcon />
            <label>clubedowhisky/instagram.com</label>
        </>
    )
}

export default RedesSociais;
