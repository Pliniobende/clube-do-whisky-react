import React from 'react';
import { RedesSociaisWrapper,Phone, Email, Facebook, Twitter,Instagram, PhoneIcon, FacebookIcon , EmailIcon, TwitterIcon, InstagramIcon } from './ResedSociais.styles';

const RedesSociais = () => {
    return (
        <RedesSociaisWrapper>
            <h2>Nossas Redes Sociais</h2>
            <Phone>
                <PhoneIcon />
                <label>(57) 3000-5000</label>
            </Phone>
            <Email>
                <EmailIcon />
                <label>email@address.com</label>
            </Email>
            <Facebook>
                <FacebookIcon />
                <label>clubedowhisky/facebook.com</label>
            </Facebook>
            <Twitter>
                <TwitterIcon />
                <label>clubedowhisky/twiter.com</label>
            </Twitter>
            <Instagram>
                <InstagramIcon />
                <label>clubedowhisky/instagram.com</label>
            </Instagram>
        </RedesSociaisWrapper>
    )
}

export default RedesSociais;
