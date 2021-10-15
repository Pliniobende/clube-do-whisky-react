import React from "react";
import Grid from "../Grid";

import { Link } from "react-router-dom";

import { Image, Detalhe } from './Card.styles';


const Card = props => (
    <>
        <Grid>
            <Image src= {props.image} alt="sample"/>
            <p>{props.descricao}</p>
        </Grid>
    </>
);


export default Card;