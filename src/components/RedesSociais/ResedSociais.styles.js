import styled from "styled-components";
import { FaPhone, FaFacebook, FaEnvelopeOpenText, FaTwitter, FaInstagram } from 'react-icons/fa';


export const RedesSociaisWrapper=styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
h2{
    color: white;
}

`;

export const Phone=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
export const Facebook=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
export const Email=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
export const Twitter=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
export const Instagram=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const PhoneIcon = styled(FaPhone)`
    color: #fff;
    margin-right: 15px;
 
`;
export const FacebookIcon = styled(FaFacebook)`
    color: #fff;
    margin-right: 15px;
`;

export const EmailIcon = styled(FaEnvelopeOpenText)`
    color: #fff;
    margin-right: 15px;
`;

export const TwitterIcon = styled(FaTwitter)`
    color: #fff;
    margin-right: 15px;
`;

export const InstagramIcon = styled(FaInstagram)`
    color: #fff;
    margin-right: 15px;
`;
