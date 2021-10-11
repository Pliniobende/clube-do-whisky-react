import React from "react";

import { Link } from "react-router-dom";

import { Image } from './Card.styles'


const Card = ({ image, clickable }) => (
    <>
        {clickable ? (
            <Link to={'#'}>
        
        <Image src= {image} alt="sample"/>
        </Link>
        ) : (
            <Image src= {image} alt="sample"/>
        )}

    </>
);


export default Card;